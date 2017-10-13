import React, {Component} from 'react';

export default class NoteInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newNote: ''
        }
    }
    submitHandler(e) {
        e.preventDefault();
        if (this.state.newNote.length > 0) {
            console.log(this.state.newNote.trim())
            this.setState({
                newNote: ''
            })
        }
    }
    onChangeHandler() {
        this.setState({
            newNote: this.refs.NoteInput.value
        })
    }
    render() {
        return (
            <form onSubmit={(e) => {this.submitHandler(e)}} className='form-group'>
                <div className='input-group'>
                    {/*Controlled input for easy form submission*/}
                    <input onChange={() => this.onChangeHandler()} className='form-control' type="text" ref='NoteInput' value={this.state.newNote} placeholder='Add a new note'/>
                    <span className='input-group-btn'>
                        <button className='btn btn-secondary'>Add Note</button>
                    </span>
                </div>
            </form>
        )
    }
}