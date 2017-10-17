import React, {Component} from 'react';

import {DiceTemplate} from './dice-roller/DiceTemplate';

/*
    The way I have this setup, you create a component for any
    dice that you want to roll, say a d20, inside ./dice-roller/. 
    
    Then you make a function
    to roll the dice in PROJECT-ROOT/imports/maths/dice/ and import it inside
    the target component. 
    
    I'm trying to keep all math outside of the UI to
    make working on math functions easier

    TODO: Conditionally render dice rollers based on GM preference
*/

export default class DiceRoller extends Component {
    render() {
        return (
            <div className='col-sm-4'>
                <h4>Dice Roller</h4>
                <div className='row'>
                    <DiceTemplate number={3}/>
                </div>
            </div>
        )
    }
}