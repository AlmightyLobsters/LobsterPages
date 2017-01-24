import React from 'react';
import { AdminNavBar } from './AdminNavBar';

export const Admin = ({ children }) => (
    <div id="admin">
        {AdminNavBar}
        {children}
    </div>
);
