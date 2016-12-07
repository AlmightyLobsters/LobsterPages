import React from 'react';
import { NavBar } from "./NavBar";

export const App = ({ children }) => (
	<div className="appRoot">
		<NavBar />
		<header>
			<h1>Almighty Lobsters</h1>
			<h2>CanSat Competition</h2>
		</header>
		{children}
	</div>
)