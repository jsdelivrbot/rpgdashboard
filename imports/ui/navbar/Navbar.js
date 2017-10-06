import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {UnauthenticatedNav} from './UnauthenticatedNav';
import {AuthenticatedNav} from './AuthenticatedNav';

export default class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userStatus: false
        }
    }
    componentDidMount() {
        const authTracker = Tracker.autorun(() => {
            const userStatus = !!Meteor.userId();
            this.setState({userStatus})
        })
    }
    //Navbar should never unmount, but this is here just in case
    componentWillUnmount() {
        authTracker.stop();
    }
    render() {
        return(
            <div>
                {this.state.userStatus ? <AuthenticatedNav /> : <UnauthenticatedNav />}
            </div>
        )
    }
}