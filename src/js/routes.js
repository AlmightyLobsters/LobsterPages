import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { App } from './components/App';
import { Home } from './components/Home';
import { About } from './components/About';
import { Articles } from './components/Articles';
import { Code } from './components/Code';
import { Login } from './components/Login';
import { NotFound } from './components/NotFound';

const Authenticate = (nextState, replace, callback, userGroup) => {
    if(process.env.SIDE === 'client') {
        const http = new XMLHttpRequest();
        http.open('POST', '/perm', true);
        http.setRequestHeader('Content-Type', 'application/json');
        http.send(JSON.stringify({ userGroup }));
        http.onreadystatechange = () => {
            if (http.readyState === XMLHttpRequest.DONE) {
                if (http.status === 401 || http.status === 403)
                    replace('/login' + nextState.location.pathname);
                callback();
            }
        };
    }
    else callback();
};

export const LobsterRoutes = (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Articles} />
        <Route path="/code" component={Code} onEnter={(s, r, c) => { Authenticate(s, r, c, 'ADMIN'); }} />
        <Route path="/login(/:nextUrl)" component={Login} />
        <Route path="*" component={NotFound} />
    </Route>
);
