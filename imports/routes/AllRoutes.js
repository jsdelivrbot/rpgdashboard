import {Meteor} from 'meteor/meteor';
import React from 'react';
import {Switch, Route} from 'react-router-dom';

import App from '../ui/App';
import Navbar from '../ui/navbar/Navbar';
import Home from '../ui/Home'
import Login from '../auth/Login'
import Signup from '../auth/Signup'
import Profile from '../ui/profile/Profile'
import {CampaignRoutes} from './campaignRoutes'

//If a user goes to unauthenticatedPage
const onEnterPublicPage = () => {
    if (Meteor.userId()) {
        return browserHistory.replace('/profile');
    }
}

//If a user goes to authenticatedPage
const onEnterPrivatePage = () => {
    if(!Meteor.userId()) {
        browserHistory.replace('/login')
    }
}

export const AllRoutes = (props) => {
    console.log(props)
    return(
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/login' render={() => {
                onEnterPublicPage();
                return <Login />
            }} />
            <Route path='/signup' component={Signup} onEnter={onEnterPublicPage} />
            <Route path='/profile' component={Profile} onEnter={onEnterPrivatePage} />
            <Route path='/campaign' onEnter={onEnterPrivatePage}>
                {CampaignRoutes}
            </Route>
        </Switch>
    )
}