import React, {Component} from 'react';

export default class NoteInput extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <form onSubmit={(e) => {this.props.submitHandler(e)}} className='form-group'>
                <div className='input-group'>
                    <input className='form-control' type="text" ref='NoteInput' placeholder='Add a new note'/>
                    <span className='input-group-btn'>
                        <button className='btn btn-secondary'>Add Note</button>
                    </span>
                </div>
            </form>
        )
    }
}