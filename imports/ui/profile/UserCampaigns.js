import {Tracker} from 'meteor/tracker';
import React, {Component} from 'react';

import {Campaigns} from '../../api/campaigns';
import {mapUserCampaigns} from './iterators/UserCampaign';

export default class UserCampaigns extends Component {
    constructor(props) {
        super(props);

        this.state = {
            campaigns: []
        }
    }
    componentDidMount() {
        console.log('Component did mount: UserCampaigns')
        this.campaignsTracker = Tracker.autorun(() => {
            let campaigns = Campaigns.find().fetch();
            console.log(campaigns)
            this.setState({
                campaigns 
            })
          })
    }
    componentWillUnmount() {
        console.log('UserCampaigns did unmount')
        this.campaignsTracker.stop();
    }
    render() {
        return(
            <div>
                <div className="row">
                    <div className="col-1-5 space"/>
                    <h3 className="col-1-3">Your Campaigns</h3>
                </div>
                {mapUserCampaigns(this.state.campaigns)}
            </div>
        )
    }
}