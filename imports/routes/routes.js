import {Meteor} from 'meteor/meteor';
import React from 'react'
import {Tracker} from 'meteor/meteor';
import {Router, Route, Switch} from 'react-router-dom'
import {browserHistory} from '../history/BrowserHistory'

import {AllRoutes} from './AllRoutes';

//Setting stage for Javascript routing
window.history = browserHistory;
console.log(browserHistory)

//Only logged-in users can go here
const authenticatedRoutes = [
    '/profile'
];

//Only guest users can go here
const unauthenticatedRoutes = [
    '/login',
    '/signup'
];

//Auto boot users off of pages they're not suppsed to be on
export const onAuthChange = (isAuthenticated) => {
    const currentPage = browserHistory.location.pathname;
    const isUnauthenticatedPage = unauthenticatedRoutes.includes(currentPage);
    const isAuthenticatedPage = authenticatedRoutes.includes(currentPage);

    if (isUnauthenticatedPage && isAuthenticated) {
        browserHistory.replace('/profile');
    } else if (isAuthenticatedPage && !isAuthenticated) {
        browserHistory.replace('/login')
    }
}

export const router = (
        <Router history={browserHistory}>
            <AllRoutes />
        </Router>
    );