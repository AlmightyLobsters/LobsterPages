import React from 'react';
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";

require('../../scss/App.scss');

export const App = ({ children }) => (
	<div id="app">
		<NavBar />
		{children}
		<Footer />
	</div>
)
