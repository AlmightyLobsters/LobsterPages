import React from 'react';
import { Link } from 'react-router';

import logo from '../../assets/imgs/logoWhite.png';
require('../../scss/NavBar.scss');

export const NavBar = _ => (
	<nav id="navbar">
		<div id="logo">
			<img src={logo} alt="Almighty Lobsters Logo"/>
			<span>Almighty Lobsters</span>
		</div>
		<ul>
			<li>
				<Link to="/" id="red">O nás</Link>
			</li>
			<li>
				<Link to="/blog" id="blue">Blog</Link>
			</li>
			<li>
				<Link to="/code" id="green">Kód</Link>
			</li>
		</ul>
	</nav>
);
