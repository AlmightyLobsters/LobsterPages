import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { LobsterRoutes } from './routes';

// Additional files
require('../web.config');
require('../google40a19af37d45a542.html');
require('../robots.txt');
require('../sitemap.xml');

const renderPage = () =>
	render(
		<AppContainer>
			<LobsterRoutes />
		</AppContainer>,
		document.getElementById('renderTarget'),
);

renderPage();

if (module.hot) 
	module.hot.accept(renderPage);

