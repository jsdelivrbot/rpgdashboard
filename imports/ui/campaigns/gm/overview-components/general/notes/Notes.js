import {Meteor} from 'meteor/meteor'
import React, {Component} from 'react';
import {connect} from 'react-redux';


import NoteInput from './NoteInput'
import {RenderNotes} from './RenderNotes';

class Notes extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {

        }
    }
    render() {
        return(
            <div className='col-xs-12'>
                <RenderNotes notes={this.props.notes}/>
                <NoteInput/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        notes: state.GMNotes
    }
}

export default connect(mapStateToProps)(Notes)