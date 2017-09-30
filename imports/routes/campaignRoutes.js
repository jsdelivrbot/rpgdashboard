import React from 'react';
import {Route} from 'react-router';

//Campaign component imports
import CreateCampaign from '../ui/campaigns/CreateCampaign';
import Overview from '../ui/campaigns/gm/Overview'

export const CampaignRoutes = (
    <div>
        <Route path='new' component={CreateCampaign} />
        <Route path='id/:id/overview' component={Overview} />
    </div>
)