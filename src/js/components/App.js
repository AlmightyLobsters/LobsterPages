import React from 'react';
import { NavBar } from "./NavBar";
const logo = require('../../assets/imgs/logoRed.png');

export const App = ({ children }) => (
	<div className="appRoot">
		<NavBar />
		<header>
			<h1>Almighty Lobsters</h1>
			<h2>CanSat Competition</h2>
			<img id="logo" src={logo} />
		</header>
		{children}
	</div>
)