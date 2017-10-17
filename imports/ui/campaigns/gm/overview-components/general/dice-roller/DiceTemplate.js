import React, {Component} from 'react';

import {rollDice} from '../../../../../../maths/dice/rollDice'

/* 
    TODO: Find a way to map all these
*/


export class DiceTemplate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            number: 1,
            modifier: 0,
            result: ''
        }
    }
    render() {
        return(
            <div className='col-xs-12'>
                <div className="row">
                    <div className='col-xs-9'>
                        <div className="input-group">
                            {/*Number of dice to roll*/}
                            <input onChange={() => {this.setState({number: this.refs.number.value})}} type="number" className="form-control" placeholder='Number' defaultValue='1' ref='number'/>
                            <span className="input-group-btn">
                                <button onClick={
                                    () => {
                                        this.setState({result: rollDice({type:'d20', modifier: this.state.modifier, number: this.state.number})})
                                    }
                                } 
                                className="btn btn-secondary">Roll d20</button>
                            </span>
                            {/*Modifier*/}
                            <input onChange={() => {this.setState({modifier: this.refs.modifier.value})}} type="number" className='form-control' placeholder='Modifier' defaultValue='0' ref='modifier'/>
                        </div>
                    </div>
                    {/*Result of dice roll*/}
                    <div className="col-xs-3">
                        <input type='text' className='form-control' readOnly='true' value={!!this.state.result ? this.state.result : 0}/>
                    </div>
                </div>
            </div>
        )
    }
}