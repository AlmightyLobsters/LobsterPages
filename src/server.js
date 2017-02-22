/* eslint no-console:0 */
import express from 'express';
import React from 'react';
import { match, RouterContext } from 'react-router';
import { renderToString } from 'react-dom/server';
import { join } from 'path';
import { LobsterRoutes } from './js/routes';
import api from './js/api/api';
import { getConfig } from './config';

const { IS_DEV, PORT, PUBLIC_PATH } = getConfig(["IS_DEV", "PORT", "PUBLIC_PATH"]);

// Assets Setup

if (IS_DEV)
    require('../build');


// Server Setup
const app = express();

if(IS_DEV)
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



app.use('/', express.static(PUBLIC_PATH));

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

app.listen(PORT, err => {
    if (err) console.log(err);
    console.log(`listening on port ${PORT}`);
});
