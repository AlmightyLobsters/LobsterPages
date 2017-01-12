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
const dbName = isDev ? "LobsterPagesDev" : "LobsterPages";

// Assets Setup

if (isDev)
    require('../build');


// Database Setup

const dbClient = new DocumentClient(process.env.DB_HOST || config.DB_HOST,
    { masterKey: process.env.DB_MASTER_KEY || config.DB_MASTER_KEY });
const articlesDB = new DatabaseRepo(dbClient, dbName, "Articles");
articlesDB.init(err => {
    console.error('Error initializing article database: ', err);
});
const userDB = new DatabaseRepo(dbClient, dbName, "Users");
userDB.init(err => {
    console.log('Error initializing user database: ', err);
});

// Server Setup

const app = express();

app.use(cookieParser(process.env.COOKIE_SECRET || config.COOKIE_SECRET));

app.use('/', express.static(publicPath));

app.post('/articles', (req, res) => {
    // Handle article post
});

app.post('/login', bodyParser.json(), (req, res) => {
    console.log(req.body);
    const user = auth(req);
    if (!user) res.status(401).redirect('/login');
    else {
        res.cookie('authHash', crypto
            .createHmac('sha256', process.env.SHA_SECRET || config.SHA_SECRET)
            .update(`${user.name}:${user.pass}`)
            .digest('base64')
        );
        res.status(200).location(`${req.protocol}://${req.get('host')}/${req.body.nextLoc || ''}`).end();
    }
});

app.post('/perm', bodyParser.json(), (req, res) => {
    if (!req.body.userGroup) res.sendStatus(400);
    else if (!req.cookies.authHash) res.sendStatus(401);
    else userDB.get(req.body.userGroup, (err, result) => {
        if (err) { console.log(err); res.sendStatus(500); }
        else if (!result) res.sendStatus(404);
        else if (result.hashes.includes(req.cookies.authHash)) res.sendStatus(200);
        else res.sendStatus(403);
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
        else res.status(404).send("Not Found");
    });
});

app.listen(process.env.PORT || 8808, err => {
    if (err) console.log(err);
    console.log(`listening`);
});
