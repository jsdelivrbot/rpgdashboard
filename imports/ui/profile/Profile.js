import {Meteor} from 'meteor/meteor';
import React, {Component} from 'react';

import {UserOptions} from './UserOptions';
import UserCampaigns from './UserCampaigns';

export default class Profile extends Component {
    componentDidMount() {

    }
    render() {
        return(
            <div>
                <UserOptions />
                <UserCampaigns />
            </div>
        )
    }
}