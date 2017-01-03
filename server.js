/* eslint no-console:0 */
import React from 'react';
import express from 'express';
import { join } from 'path';
import { renderToString } from 'react-dom-stream/server';
import { match, RouterContext } from 'react-router';

import { LobsterRoutes } from './src/js/routes';

const publicPath = join(__dirname, 'public');

const app = express();

app.use('/', express.static(publicPath));

const port = process.env.PORT || 8808;

app.get('*', (req, res) => {
	match({ routes: LobsterRoutes, location: req.url }, (error, redirectLocation, renderProps) => {
		if (error) res.status(500).send(error.message);
		else if (redirectLocation) res.redirect(302, redirectLocation.pathname + redirectLocation.search);
		else if (renderProps)
			require('fs').createReadStream(join(__dirname, 'src', 'index-start.html'))
				.on('end', () => {
					renderToString(<RouterContext {...renderProps} />)
						.on('end', () => {
							res.write('</body></html>');
							res.end();
						}).pipe(res, { end: false });
				}).pipe(res, { end: false });
		else res.status(404).send("Not Found");
	})
});

app.listen(port);