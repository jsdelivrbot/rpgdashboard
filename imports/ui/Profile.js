import {Meteor} from 'meteor/meteor';
import React, {Component} from 'react';
import {browserHistory} from 'react-router';

import {logout} from '../auth/Logout';
import {Campaign} from '../api/campaigns';

export default class Profile extends Component {
    componentDidMount() {
        let userCampaigns = Campaign.find({'_createdBy' : Meteor.userId()}).fetch();
        console.log(userCampaigns);
    }
    render() {
        return(
            <div>
                <div className='row'>
                    <div className="row">
                        <div className="col-1-5 space"></div>
                        <h3 className='col-1-3'>Profile Page</h3>
                    </div>
                    <div className="row">
                        <div className="col-1-5 space"></div>
                        <button
                        onClick={() => logout()}>Logout</button>
                        <button
                        onClick={() => {
                            browserHistory.push('/campaign/new');
                        }}>Create Campaign</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-1-5 space"/>
                    <h3 className="col-1-3">Your Campaigns</h3>
                </div>
            </div>
        )
    }
}