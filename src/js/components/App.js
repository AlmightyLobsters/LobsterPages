import React from 'react';
import { NavBar } from "./NavBar";
const logo = require('../../assets/imgs/logoRed.png');

export const App = ({ children }) => (
	<div className="appRoot">
		<NavBar />
		<img id="logo" src={logo} />
		<h1>Application!</h1>
		{children}
	</div>
)