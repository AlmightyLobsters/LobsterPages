import React from 'react';
import { NavBar } from "./NavBar";

import logo from '../../assets/imgs/logoRed.png';
require('../../scss/App.scss');

export const App = ({ children }) => (
	<div className="app">
		<NavBar />
		<header>
			<h1>Almighty Lobsters</h1>
			<h2>CanSat Competition</h2>
			<img id="logo" src={logo} />
		</header>
		{children}
	</div>
)