import {Meteor} from 'meteor/meteor'
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addGMNote} from './../../../../../../redux/actions/AddGMNote';
import {bindActionCreators} from 'redux';


import NoteInput from './NoteInput'
import {RenderNotes} from './RenderNotes';

class Notes extends Component {
    constructor(props) {
        super(props);
        console.log(props)
    }
    render() {
        return(
            <div className='col-xs-12'>
                <RenderNotes notes={this.props.notes}/>
                <NoteInput addGMNote={this.props.addGMNote}/>
            </div>
        )
    }
}

//This allows us to access the Redux Store for the GM Notes
function mapStateToProps(state) {
    return {
        notes: state.GMNotes
    }
}

//TODO: Fix this non-working dispatch
//This binds our action to send a new note to the GM note reducer
function mapDispatchToProps(dispatch) {
    return bindActionCreators({addGMNote: addGMNote}, dispatch)
}
//Notes.js is a container for RenderNotes and NoteInput
export default connect(mapStateToProps, mapDispatchToProps)(Notes)