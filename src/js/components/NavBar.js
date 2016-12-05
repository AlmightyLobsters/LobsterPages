import React from 'react';
import { Link } from 'react-router';

export const NavBar = _ => (
	<div className="nav">
		<Link to="/">Home</Link>
		<Link to="/login">Login</Link>
	</div>
);