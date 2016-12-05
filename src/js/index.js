import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { LobsterRoutes } from './routes';

if (process.env.NODE_ENV !== 'production') {
	require('../scss/main.scss');
} else {
	var style = document.createElement('link');
	style.rel="stylesheet";
	style.href="main.css";
	document.head.appendChild(style);
}



const renderPage = () =>
	render(
		<AppContainer>
			<LobsterRoutes />
		</AppContainer>,
		document.getElementById('app')
);

renderPage();

if (module.hot) {
	module.hot.accept(renderPage);
}