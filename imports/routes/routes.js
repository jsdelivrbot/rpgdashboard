import {Meteor} from 'meteor/meteor';
import React from 'react'
import {Tracker} from 'meteor/meteor';
import {Router, Route, Switch} from 'react-router-dom'
import {browserHistory} from '../history/BrowserHistory'

import {AllRoutes} from './AllRoutes';

//Setting stage for Javascript routing
window.history = browserHistory;
console.log(browserHistory)

export const router = (
        <Router history={browserHistory}>
            <AllRoutes />
        </Router>
    );