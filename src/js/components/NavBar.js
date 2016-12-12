import React from 'react';
import { Link } from 'react-router';

export const NavBar = _ => (
	<div className="nav">
		<Link to="/">About</Link>
		<Link to="/login">Login</Link>
	</div>
);