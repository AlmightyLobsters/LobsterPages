import React from 'react';
import { NavBar } from "./NavBar";

export const App = ({ children }) => (
	<div className="appRoot">
		<NavBar />
		<h1>Application!</h1>
		{children}
	</div>
)