import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';

import { LobsterRoutes } from './routes';

render(
    <Router history={browserHistory} routes={LobsterRoutes} />,
    document.getElementById('reactContent')
);
