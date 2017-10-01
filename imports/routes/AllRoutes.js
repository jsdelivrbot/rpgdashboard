import {Meteor} from 'meteor/meteor';
import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import {browserHistory} from '../history/BrowserHistory';

import App from '../ui/App';
import Navbar from '../ui/navbar/Navbar';
import Home from '../ui/Home'
import Login from '../auth/Login'
import Signup from '../auth/Signup'
import Profile from '../ui/profile/Profile'
import {CampaignRoutes} from './campaignRoutes'

//If a user goes to unauthenticatedPage
export const onEnterPublicPage = () => {
    if (Meteor.userId()) {
        return <Redirect to='/profile' />;
    }
}

//If a user goes to authenticatedPage
export const onEnterPrivatePage = () => {
    if(!Meteor.userId()) {
        browserHistory.replaceState({ test: browserHistory.location.pathname}, '/login')
    }
}

export const AllRoutes = (props) => {
    return(
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup}/>
            <Route path='/profile' component={Profile}/>
            <Route path='/campaign'>
                {CampaignRoutes}
            </Route>
        </Switch>
    )
}