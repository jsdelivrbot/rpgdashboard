import React, {Component} from 'react';

import {rolld20} from '../../../../../../maths/dice/rolld20'

/* 
    TODO: Find a way to map all these
*/


export class DiceTemplate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            result: ''
        }
    }
    render() {
        return(
            <div className='col-xs-12'>
                <div className="row">
                    <div className='col-xs-8'>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder='Number'/>
                            <span className="input-group-btn">
                                <button className="btn btn-secondary">Roll d20</button>
                            </span>
                        </div>
                    </div>
                    <div className="col-xs-4">
                        <input type='text' className='form-control' value={!!this.state.d20Result ? this.state.d20Result : 'Result'}/>
                    </div>
                </div>
            </div>
        )
    }
}