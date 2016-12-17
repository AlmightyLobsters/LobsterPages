import React from 'react';
import { NavBar } from "./NavBar";

require('../../scss/App.scss');

export const App = ({ children }) => (
	<div className="app">
		<NavBar />
		{children}
	</div>
)
