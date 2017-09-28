import React, {Component} from 'react';
import {browserHistory} from 'react-router';

import {logout} from '../auth/Logout';

export default class Profile extends Component {
    render() {
        return(
            <div>
                <h3>Profile Page</h3>
                <button
                onClick={() => logout()}>Logout</button>
                <button
                onClick={() => {
                    browserHistory.push('/campaign/new');
                }}>Create Campaign</button>
            </div>
        )
    }
}