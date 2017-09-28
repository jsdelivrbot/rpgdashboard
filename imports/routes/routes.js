import {Meteor} from 'meteor/meteor';
import React from 'react'
import {Tracker} from 'meteor/meteor';
import {Router, Route, browserHistory} from 'react-router'

import Home from '../ui/Home'
import Login from '../auth/Login'
import Signup from '../auth/Signup'
import Profile from '../ui/Profile'
import {CampaignRoutes} from './campaignRoutes'

//Setting stage for Javascript routing
window.history = browserHistory;

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
    const currentPage = browserHistory.getCurrentLocation().pathname;
    const isUnauthenticatedPage = unauthenticatedRoutes.includes(currentPage);
    const isAuthenticatedPage = authenticatedRoutes.includes(currentPage);

    if (isUnauthenticatedPage && isAuthenticated) {
        browserHistory.replace('/profile');
    } else if (isAuthenticatedPage && !isAuthenticated) {
        browserHistory.replace('/login')
    }
}

//If a user goes to unauthenticatedPage
const onEnterPublicPage = () => {
    if (Meteor.userId()) {
        browserHistory.push('/profile');
    }
}

//If a user goes to authenticatedPage
const onEnterPrivatePage = () => {
    if(!Meteor.userId()) {
        browserHistory.push('/login')
    }
}

export const router = (
        <Router history={browserHistory}>
            <div>
                <Route path='/' exact component={Home} />
                <Route path='/login' component={Login} onEnter={onEnterPublicPage} />
                <Route path='/signup' component={Signup} onEnter={onEnterPublicPage} />
                <Route path='/profile' component={Profile} onEnter={onEnterPrivatePage} />
                {CampaignRoutes}
            </div>
        </Router>
    );