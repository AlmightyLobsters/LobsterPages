import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import {LobsterRoutes } from './routes';

const renderPage = () =>
	render(
		<AppContainer>
			<LobsterRoutes />
		</AppContainer>,
		document.getElementById('app'),
);

renderPage();

if (module.hot) {
	module.hot.accept(renderPage);
}