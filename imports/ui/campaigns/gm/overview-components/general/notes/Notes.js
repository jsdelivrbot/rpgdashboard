import {Meteor} from 'meteor/meteor'
import React, {Component} from 'react';

import NoteInput from './NoteInput'

export default class Notes extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    submitHandler(e) {
        e.preventDefault();
        console.log(this.refs.NoteInput.nodeValue.trim());
    }
    render() {
        return(
            <div>
                <NoteInput submitHandler={this.submitHandler()}/>
            </div>
        )
    }
}