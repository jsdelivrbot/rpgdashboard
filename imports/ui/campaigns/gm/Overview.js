import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import React, {Component} from 'react';

import {Campaigns} from '../../../api/campaigns';
import OverviewFrame from './overview-components/OverviewFrame';

const Loading = () => {
    return (
        <div className='row'>
            <div className="col-1-3 space" />
            <div className='col-1-3'>
                <div className='load large' />
            </div>

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
        //TODO: Replace this with a secure Publication/Subscription
        this.campaignStatus = Tracker.autorun(() => {
            //Get info for current campaign
            let ActiveCampaign = Campaigns.find({'_id' : this.props.params.id}).fetch();
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