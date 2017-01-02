import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { App } from './components/App';
import { Home } from './components/Home';
import { About } from './components/About';
import { Articles } from './components/Articles';
import { Code } from './components/Code';
import { NotFound } from './components/NotFound';

export const LobsterRoutes = (
	<Route path="/" component={App}>
		<IndexRoute component={Home} />
		<Route path="/about" component={About} />
		<Route path="/blog" component={Articles} />
		<Route path="/code" component={Code} />
		<Route path="*" component={NotFound} />
	</Route>
);