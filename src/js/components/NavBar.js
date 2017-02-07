import React from 'react';
import { Link } from 'react-router';

export const NavBar = _ => (
    <nav id="navbar">
        <Link to="/" id="logo">
            <img src="/imgs/logoRed.svg" alt="Almighty Lobsters Logo"/>
            <span>Almighty Lobsters</span>
        </Link>
        <ul>
            <li>
                <Link to="/about"><span id="red">O nás</span></Link>
            </li>
            <li>
                <Link to="/blog"><span id="blue">Blog</span></Link>
            </li>
            <li>
                <Link to="/gallery"><span id="green">Galerie</span></Link>
            </li>
        </ul>
    </nav>
);
