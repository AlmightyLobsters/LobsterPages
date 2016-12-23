import React from 'react';
import { Link } from 'react-router';

import logo from '../../assets/imgs/logoWhite.png';
require('../../scss/NavBar.scss');

let activeInstance;

export const NavBar = _ => (
	<nav id="navbar">
		<div id="logo">
			<img src={logo} alt="Almighty Lobsters Logo"/>
			<span>Almighty Lobsters</span>
		</div>
		<ul>
			<li>
				<Link to="/" id="red">About</Link>
			</li>
			<li>
				<Link to="/articles" id="blue">Articles</Link>
			</li>
			<li>
				<Link to="/code" id="green">Code</Link>
			</li>
		</ul>
	</nav>
);
