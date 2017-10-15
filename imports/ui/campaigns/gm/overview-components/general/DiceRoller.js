import React, {Component} from 'react';

import {D20} from './dice-roll/d-20.js';

export default class DiceRoller extends Component {
    render() {
        return (
            <div className='col-sm-4'>
                <h4>Dice Roller</h4>
                <div className='row'>
                    <D20 number={3}/>
                </div>
            </div>
        )
    }
}