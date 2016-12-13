import React from 'react';
import { Link } from 'react-router';

import logo from '../../assets/imgs/logoRed.svg';
import logoDprc from '../../assets/imgs/logoRed.png';
require('../../scss/NavBar.scss');

let activeInstance;

export const NavBar = _ => (
	<nav className="navbar">
		<img src={document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? logo : logoDprc} alt="Logo"/>
		<ul>
			<li>
				<Link to="/">About</Link>
			</li>
			<li>
				<Link to="/login">Login</Link>
			</li>
		</ul>
	</nav>
);
