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
        return <Redirect to='/login' />
    }
}

export const AllRoutes = (props) => {
    console.log(props)
    return(
        <Switch>
            <div className='container'>
                <Route path='/' exact component={Home} />
                {/*
                * These 'render' props are to replace react-router v3's onEnter props
                * Only neccessary on Specifically auth/non-auth routes. Like /home is fine
                * because everyone can go there whenever, but /profile or /login are only for logged in
                * non-logged in users
                */}
                <Route path='/login' render={() => {
                    onEnterPublicPage();
                    return <Login />
                }} />

                <Route path='/signup' render={() => {
                    onEnterPublicPage();
                    return <Signup />
                }} />
                <Route path='/profile' render={() => {
                    onEnterPrivatePage();
                    return <Profile />
                }} />
                <Route path='/campaign'>
                    {CampaignRoutes}
                </Route>
            </div>
        </Switch>
    )
}