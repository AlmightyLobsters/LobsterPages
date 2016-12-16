import React from 'react';
import { Link } from 'react-router';

import logo from '../../assets/imgs/logoWhite.png';
require('../../scss/NavBar.scss');

let activeInstance;

export const NavBar = _ => (
	<nav className="navbar">
		<img src={logo} alt="Almighty Lobsters Logo"/>
		<ul>
			<li>
				<Link to="/">About</Link>
			</li>
			<li>
				<Link to="/articles">Articles</Link>
			</li>
			<li>
				<Link to="/code">Code</Link>
			</li>
		</ul>
	</nav>
);
