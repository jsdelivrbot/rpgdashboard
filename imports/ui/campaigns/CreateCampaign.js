import {Meteor} from 'meteor/meteor';
import React, {Component} from 'react';

export default class CreateCampaign extends Component {
    componentDidMount() {
        console.log(this.refs);
    }
    render() {
        return (
            <form onSubmit={e => e.preventDefault()}>
                <div className='row'>
                    <div className='col-1-3 space'/>
                    <h3 className='col-1-3'>New Campaign</h3>
                </div>
                <input type="hidden" ref='_createdBy' value={Meteor.userId()}/>
                <div className='row'>
                    <div className='col-1-3 space' />
                    <input className='col-1-3' type="text" ref='name' placeholder='Campaign name'/>
                </div>
                <div className="row">
                    <div className="col-1-3 space" />

                </div>
                <div className="row">
                    <div className="col-1-3 space" />
                    <button className="col-1-3 solid">Create Campaign</button>
                </div>
            </form>
        )
    }
}