import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './style.css';
import * as serviceWorker from './serviceWorker';

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.css';

const MainScreen = lazy(() => import('./mainScreen'));
const SuperUser = lazy(() => import('./superuser/main'));
const User = lazy(() => import('./user/athleteScreen'));




ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/" component={MainScreen} />
                    <Route path="/admin" component={SuperUser} />
                    <Route path="/student" component={User} />
                </Switch>
            </Suspense>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
