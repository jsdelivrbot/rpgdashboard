import React from 'react';
import {Route} from 'react-router';

//Campaign component imports
import CreateCampaign from '../ui/campaigns/CreateCampaign';

export const CampaignRoutes = (
    <div>
        <Route path='new' component={CreateCampaign} />
    </div>
)