import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { About } from './components/About';
import { App } from './components/App';
import { Articles } from './components/Articles';
import { Code } from './components/Code';

export const LobsterRoutes = _ => (
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={About} />
			<Route path="/articles" component={Articles}></Route>
			<Route path="/code" component={Code}></Route>
		</Route>
	</Router>
);
