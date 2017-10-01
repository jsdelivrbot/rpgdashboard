import {Meteor} from 'meteor/meteor';
import React, {Component} from 'react';

import {browserHistory} from '../../history/BrowserHistory';
import {Campaigns} from '../../api/campaigns';

export default class CreateCampaign extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: ''
        }
    }
    createCampaign(e) {
        e.preventDefault();
        const _campaignName = this.refs.name.value.trim();
        const _createdBy = Meteor.userId();

        //I get the _createdBy var without an input field to 
        //mitigate potential user fiddling
        if (_campaignName && _createdBy) {

            //TODO: replace this with a Meteor.call

            Campaigns.insert({_campaignName, _createdBy}, (err, result) => {
                console.log('Error:', err, 'Results:', result);
                if (err) {
                    this.setState({
                        error: err.message
                    })
                } else if (result) {
                    //'result' returns the value for the new post

                    //Pushing browser to newly created campaign
                    browserHistory.push(`/campaign/id/${result}/overview`)
                }
            });
        }
    }
    render() {
        return (
            //TODO: Move all this garbage to a sub component
            <form onSubmit={this.createCampaign.bind(this)}>
                <div className='row'>
                    <div className='col-1-3 space'/>
                    <h3 className='col-1-3'>New Campaign</h3>
                </div>
                <div className="row">
                    <div className="col-1-3 space" />
                    {/*Displaying errors here*/}
                    {this.state.error ? <p className='col-1-3'>{this.state.error}</p> : undefined}
                </div>
                <div className='row'>
                    <div className='col-1-3 space' />
                    <input className='col-1-3' type="text" ref='name' placeholder='Campaign name'/>
                </div>
                <div className="row">
                    <div className="col-1-3 space" />
                    <button className="col-1-3 solid">Create Campaign</button>
                </div>
            </form>
        )
    }
}