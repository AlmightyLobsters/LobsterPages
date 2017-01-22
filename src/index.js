/* eslint no-console:0 */
import express from 'express';
import cookieParser from 'cookie-parser';
import auth from 'basic-auth';
import bodyParser from 'body-parser';
import crypto from 'crypto';
import React from 'react';
import { match, RouterContext } from 'react-router';
import { renderToString } from 'react-dom/server';
import { join } from 'path';
import { DocumentClient } from 'documentdb';
import DatabaseRepo from './js/DatabaseRepo';
import { LobsterRoutes } from './js/routes';

let config = {};
if (!process.env.DB_HOST || !process.env.DB_MASTER_KEY)
    try {
        config = require('../private/config');
    }
    catch (e) { console.error('Specify either the connection environment variables or include a config file'); }


const isDev = process.env.NODE_ENV !== 'production';
const publicPath = join(__dirname, '..', 'public');
const dbName = isDev ? 'LobsterPagesDev' : 'LobsterPages';

const requireGroup = userGroup => (req, res, next) => {
    if (!req.body) req.body = {};
    req.body.userGroup = userGroup;
    next();
};

const authenticate = (req, cb) => {
    if (!req.body.userGroup) cb({status: 400, msg: 'User group not specified'});
    else if (!req.cookies.authHash) cb({status: 401, msg: 'Not logged in'});
    else if (!userDB.initialized) cb({status: 500, msg: 'User database not initialized'});
    else userDB.get(req.body.userGroup, (err, result) => {
        if (err) cb({status: 500, msg: err});
        else if (!result) cb({status: 404, msg: 'User group record not found'});
        else if (result.hashes.includes(req.cookies.authHash)) cb(null);
        else cb({status: 403, msg: 'Access denied'});
    });
};

// Assets Setup

if (isDev)
    require('../build');


// Database Setup

const dbClient = new DocumentClient(process.env.DB_HOST || config.DB_HOST,
    { masterKey: process.env.DB_MASTER_KEY || config.DB_MASTER_KEY });
const articlesDB = new DatabaseRepo(dbClient, dbName, 'Articles');
articlesDB.init(err => {
    console.error('Error initializing article database: ', err);
});
const userDB = new DatabaseRepo(dbClient, dbName, 'Users');
userDB.init(err => {
    console.log('Error initializing user database: ', err);
});

// Server Setup

const app = express();

app.use(cookieParser(process.env.COOKIE_SECRET || config.COOKIE_SECRET));

app.use('/', express.static(publicPath));

app.get('/articles(/:id)?', (req, res) => {
    if(req.params.id) articlesDB.get(req.params.id, (err, result) => {
        if (err) res.status(500).send(err);
        else if (!result) res.sendStatus(404);
        else res.status(200).send(result);
    });
    else articlesDB.getAll((err, results) => {
        if(err) res.status(500).send(err);
        else if(!results) res.sendStatus(500);
        else res.status(200).send(results.sort((a, b) => (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )));
    });
});

app.post('/articles', bodyParser.json(), requireGroup('ADMIN'), (req, res) => {
    authenticate(req, err => {
        if (err) res.status(err.status).send(err.msg);
        else {
            let unparsed = req.body;
            if (!unparsed || !unparsed.title || !unparsed.text)
                res.status(422).send('New article must specify at least a title and text components');
            else if (!articlesDB.initialized) res.status(500).send('Article database not connected');
            else articlesDB.getAll((err, all) => {
                if (err) res.status(500).send(err);
                else {
                    const newArt = {
                        id: JSON.stringify(parseInt(all.slice(-1)[0].id) + 1),
                        title: unparsed.title,
                        text: unparsed.text,
                        reversed: !!unparsed.reversed
                    };
                    if (unparsed.imgPath) {
                        newArt.imgPath = unparsed.imgPath;
                        newArt.imgFormat = unparsed.imgFormat || 'medium';
                    }
                    articlesDB.add(newArt, (err, doc) => {
                        if (err) res.status(500).send(err);
                        else res.status(201).location(`${req.protocol}://${req.get('host')}/articles/${doc.id}`).send(doc);
                    });
                }
            });
        }
    });
});

app.delete('/articles/:id', requireGroup('ADMIN'), (req, res) => {
    authenticate(req, err => {
        if(err) res.status(err.status).send(err.msg);
        else if(!articlesDB.initialized) res.status(500).send('Article database not connected');
        else articlesDB.remove(req.params.id, (err, doc) => {
            if (err) res.status(500).send(err);
            else res.status(200).send(doc);
        });
    });
});

app.post('/login', (req, res) => {
    const user = auth(req);
    if (!user) res.sendStatus(401);
    else {
        res.cookie('authHash', crypto
            .createHmac('sha256', process.env.SHA_SECRET || config.SHA_SECRET)
            .update(`${user.name}:${user.pass}`)
            .digest('base64')
        );
        res.status(200).end();
    }
});

app.post('/perm', bodyParser.json(), (req, res) => {
    authenticate(req, err => {
        if(err) res.status(err.status).send(err.msg);
        else res.status(200).send('Access granted');
    });
});

app.get('*', (req, res) => {
    match({ routes: LobsterRoutes, location: req.url }, (error, redirectLocation, renderProps) => {
        if (error) res.status(500).send(error.message);
        else if (redirectLocation) res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        else if (renderProps) {
            const content = renderToString(<RouterContext {...renderProps} />);
            res.render(join(__dirname, 'index.ejs'), { content });
        }
        else res.status(404).send('Not Found');
    });
});

app.listen(process.env.PORT || 8808, err => {
    if (err) console.log(err);
    console.log(`listening`);
});
