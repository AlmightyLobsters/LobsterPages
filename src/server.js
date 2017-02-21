/* eslint no-console:0 */
import express from 'express';
import cookieParser from 'cookie-parser';
import React from 'react';
import { match, RouterContext } from 'react-router';
import { renderToString } from 'react-dom/server';
import { join } from 'path';
import { LobsterRoutes } from './js/routes';
import api from './js/api/api';

let config = {};
if (!process.env.DB_HOST || !process.env.DB_MASTER_KEY)
    try {
        config = require('../private/config');
    }
    catch (e) { console.error('Specify either the connection environment variables or include a config file'); }


const isDev = process.env.NODE_ENV !== 'production';
const publicPath = join(__dirname, '..', 'public');

// Assets Setup

if (isDev)
    require('../build');


// Server Setup
const app = express();

if(isDev)
    app.use(require('express-winston').logger({
        transports: [
            new (require('winston')).transports.Console({
                colorize: true
            })
        ],
        colorize: true,
        expressFormat: true,
        meta: false
    }));



app.use('/', express.static(publicPath)); // do I need to copy this too?

app.use(cookieParser(process.env.COOKIE_SECRET || config.COOKIE_SECRET));

app.use('/api', api);

app.get('/robots.txt', (req, res) => {
    res.send(`
    Sitemap: http://almighty.lobsters.tech/sitemap.xml

    User-agent: *
	    Disallow:`
    );
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
