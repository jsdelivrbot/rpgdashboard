import {Meteor} from 'meteor/meteor';
import React from 'react';
import {Route, Redirect} from 'react-router-dom';

//User auth from routes.js
import {onEnterPrivatePage}  from './AllRoutes'

//Campaign component imports
import CreateCampaign from '../ui/campaigns/CreateCampaign';
import Overview from '../ui/campaigns/gm/Overview'

export const CampaignRoutes = (
    <div>
        <Route path='/campaign/new' render={() => {
            console.log()
            //TODO: Figure out why onEnterPrivate page breaks, but this doesn't...
            if (!Meteor.user()) {
                return <Redirect to='/login' />
            }
            return <CreateCampaign />
        }} />
        <Route path='/campaign/id/:id/overview' render={() => {
            onEnterPrivatePage();
            return <Overview />
        }} />
    </div>
)