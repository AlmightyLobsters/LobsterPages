import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { App } from './components/App';
import { About } from './components/About';
import { Articles } from './components/Articles';
import { Code } from './components/Code';
import { NotFound } from './components/NotFound';

export const LobsterRoutes = _ => (
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={About} />
			<Route path="/blog" component={Articles} />
			<Route path="/code" component={Code} />
			<Route path="*" component={NotFound} />
		</Route>
	</Router>
);
