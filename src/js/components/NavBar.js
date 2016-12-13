import React from 'react';
import { Link } from 'react-router';

import logo from '../../assets/imgs/logoRed.png';
require('../../scss/NavBar.scss');

let activeInstance;

export const NavBar = _ => (
	<nav className="nav">
		<img src={logo} alt="Logo"/>
		<ul>
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/login">Login</Link>
			</li>
		</ul>
	</nav>
);