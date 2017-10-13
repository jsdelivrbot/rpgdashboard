import {Meteor} from 'meteor/meteor';
import React from 'react'
import {Tracker} from 'meteor/meteor';
import {Router, Route, Switch} from 'react-router-dom'
import {browserHistory} from '../history/BrowserHistory'
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import reduxStore from '../redux/reducers/reduxStore'

import {AllRoutes} from './AllRoutes';

//Setting stage for Javascript routing
window.history = browserHistory;

//Setting up redux store
let store = createStore(reduxStore);

export const router = (
    <div className='container'>
        <Provider store={store}>
            <Router history={browserHistory}>
                <AllRoutes />
            </Router>
        </Provider>
    </div>
    );