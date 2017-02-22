import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { ACCEPTED } from 'http-status-codes';
import { App } from './components/App';
import { Home } from './components/Home';
import { About } from './components/About';
import { Articles } from './components/Articles';
import { Blog } from './components/Blog';
import { Code } from './components/Code';
import { Gallery } from './components/Gallery';
import { Login } from './components/Login';
import { Admin } from './components/Admin/Admin';
import { Dashboard } from './components/Admin/Dashboard';
import { NotFound } from './components/NotFound';

const Authenticate = userGroup => (nextState, replace, callback) => {
    if(process.env.SIDE === 'client') {
        const http = new XMLHttpRequest();
        http.open('POST', '/api/perm', true);
        http.setRequestHeader('Content-Type', 'application/json');
        http.send(JSON.stringify({ userGroup }));
        http.onreadystatechange = () => {
            if (http.readyState === XMLHttpRequest.DONE) {
                if (http.status !== ACCEPTED)
                    replace('/login/' + escape(nextState.location.pathname.replace(/^\//, '')));
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
        <Route path="/blog">
            <IndexRoute component={Articles} />
            <Route path=":artId" component={Blog} />
        </Route>
        <Route path="/code" component={Code} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/login(/:nextUrl)" component={Login} />
        <Route path="/admin" component={Admin} onEnter={Authenticate('ADMIN')}>
            <IndexRoute component={Dashboard} />
        </Route>
        <Route path="*" component={NotFound} />
    </Route>
);
