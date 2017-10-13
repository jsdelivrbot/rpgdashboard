import React, {Component} from 'react';

import Notes from './notes/Notes';

export default class GMNotes extends Component {
    render() {
        return(
            <div className='col-sm-4'>
                <h4>GM Notes</h4>
                <div className='row'>
                    <Notes/>
                </div>
            </div>
        )
    }
}