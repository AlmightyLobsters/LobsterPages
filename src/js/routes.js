import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { App } from './components/App';
import { Login } from './components/Login';
import { Home } from './components/Home';

export const LobsterRoutes = _ => (
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="/login" component={Login} />
		</Route>
	</Router>
);