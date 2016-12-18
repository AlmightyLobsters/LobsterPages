import React from 'react';
import { NavBar } from "./NavBar";

require('../../scss/App.scss');

export const App = ({ children }) => (
	<div id="app">
		<NavBar />
		{children}
		<footer>
			&copy; Almighty Lobsters
		</footer>
	</div>
)
