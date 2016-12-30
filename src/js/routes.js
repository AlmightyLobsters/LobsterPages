import React from 'react';
import { BrowserRouter, Match } from 'react-router';
import { App } from './components/App';
import { Home } from './components/Home';
import { About } from './components/About';
import { Articles } from './components/Articles';
import { Code } from './components/Code';

export const LobsterRoutes = _ => (
	<BrowserRouter>
		<App>
			<Match exactly pattern="/" component={Home} />
			<Match pattern="/about" component={About} />
			<Match pattern="/blog" component={Articles} />
			<Match pattern="/code" component={Code} />
		</App>	
	</BrowserRouter>
);
