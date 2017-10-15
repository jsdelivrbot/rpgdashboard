import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import React, {Component} from 'react';

import {Campaigns} from '../../../api/campaigns';
import OverviewFrame from './overview-components/OverviewFrame';

//TODO: Make this an importable function for anywhere, and convert to Bootstrap
const Loading = () => {
    return (
        <div className='row'>
            <h1>Loading</h1>

        </div>
    )
}

export default class Overview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ActiveCampaign: []
        }
    }
    componentDidMount() {
        console.log(this.props);
        // This .subscribe is here AND the Profile component in case the user goes directly to this page, 
        // there was an issue where the subscribe wasn't in effect if the user went directly here
        this.campaignStatus = Tracker.autorun(() => {
            //Get info for current campaign
            Meteor.subscribe('user-campaigns');
            let ActiveCampaign = Campaigns.find({'_id' : this.props.match.params.id}).fetch();
            this.setState({ActiveCampaign}, () => console.log(this.state));
        })
    }
    componentWillUnmount() {
        this.campaignStatus.stop()
    }
    render() {
        return(
            <div>
                {this.state.ActiveCampaign.length > 0 ? <OverviewFrame ActiveCampaign={this.state.ActiveCampaign}/> : Loading()}
            </div>
        )
    }
}