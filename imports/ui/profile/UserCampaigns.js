import {Meteor} from 'meteor/meteor';
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
        //Subscribing to user-craeted campaigns for security
        Meteor.subscribe('user-campaigns');
        this.campaignsTracker = Tracker.autorun(() => {
            let campaigns = Campaigns.find().fetch();
            this.setState({
                campaigns 
            })
          })
    }
    componentWillUnmount() {
        //Stopping tracker to avoid infinite trackers
        this.campaignsTracker.stop();
    }
    render() {
        return(
            <div>
                <div className="row">
                    <h3 className="">Your Campaigns</h3>
                </div>
                {mapUserCampaigns(this.state.campaigns)}
            </div>
        )
    }
}