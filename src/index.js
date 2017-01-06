/* eslint no-console:0 */
import express from 'express';
import cookieParser from 'cookie-parser';
import auth from 'basic-auth';
import crypto from 'crypto';
import React from 'react';
import { match, RouterContext } from 'react-router';
import { renderToString } from 'react-dom/server';
import { join } from 'path';
import { DocumentClient } from 'documentdb';
import ArticlesDB from './js/ArticlesDB';
import { LobsterRoutes, AuthRequired } from './js/routes';
import users from './users';

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

if (isDev) {
    const compiler = require('webpack')(require('../webpack.config'));
    compiler.run((err, stats) => {
        if (err) console.error(err);
        else console.log('app bundled');
    });
}

// Database Setup

const dbClient = new DocumentClient(process.env.DB_HOST || config.DB_HOST,
    { masterKey: process.env.DB_MASTER_KEY || config.DB_MASTER_KEY });
const articlesDB = new ArticlesDB(dbClient, dbName, "Articles");
articlesDB.init(err => {
    console.error('Error initializing article database: ', err);
});

// Server Setup

const app = express();

app.use(cookieParser(process.env.COOKIE_SECRET || config.COOKIE_SECRET));

app.use('/', express.static(publicPath));

app.post('/articles', (req, res) => {

});

app.post('/login', (req, res) => {
    const user = auth(req);
    if (user) {
        res.cookie('authHash', crypto
            .createHmac('sha256', process.env.SHA_SECRET || config.SHA_SECRET)
            .update(`${user.name}:${user.pass}`)
            .digest('base64')
        );
        res.sendStatus(302);
    }
    else res.sendStatus(401);
});

app.get('*', (req, res) => {
    match({ routes: LobsterRoutes, location: req.url }, (error, redirectLocation, renderProps) => {
        if (error) res.status(500).send(error.message);
        else if (redirectLocation) res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        else if (renderProps) {
            const requireLogin = AuthRequired.reduce(
                (val, reg) => val || reg.test(renderProps.location.pathname),
                false
            );
            console.log(requireLogin);
            if (!requireLogin || (requireLogin && users.ADMINS.includes(req.cookies.authHash))) {
                console.log("Access permitted");
                const content = renderToString(<RouterContext {...renderProps} />);
                res.render(join(__dirname, 'index.ejs'), { content });
            }
            else res.redirect('/login');
        }
        else res.status(404).send("Not Found");
    });
});

app.listen(process.env.PORT || 8808, err => {
    if (err) console.log(err);
    console.log(`listening`);
});
