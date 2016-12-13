import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { App } from './components/App';
// import { Home } from './components/Home';
import { Login } from './components/Login';
import { About } from './components/About';

export const LobsterRoutes = _ => (
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={About} />
			<Route path="/login" component={Login} />
		</Route>
	</Router>
);