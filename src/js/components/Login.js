import React from 'react';
import axios from 'axios';
import { OK } from 'http-status-codes';

export const Login = ({ params: { nextUrl } }) => (
    <div id="login">
        <form>
            <fieldset>
                <label>Username: </label>
                <input id="uname" type="text"/>
            </fieldset>
            <fieldset>
                <label>Password: </label>
                <input id="passwd" type="password"/>
            </fieldset>
            <input type="submit" onClick={e => {
                e.preventDefault();
                const username = document.getElementById('uname').value;
                const password = document.getElementById('passwd').value;
                axios.post('/api/login', null, { auth: { username, password } })
                    .then(resp =>resp.status === OK ? window.location.pathname = nextUrl || '/' : window.location.reload(true))
                    .catch(err => window.location.reload(true));
            }}/>
        </form>
    </div>
);
