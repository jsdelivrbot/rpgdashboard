import React, {Component} from 'react';

import GMNotes from './general/GMNotes';
import PlayerOverview from './general/PlayerOverview';
import CombatOrder from './combat-specific/CombatOrder';
import DiceRoller from './general/DiceRoller';

export default class CombatOverview extends Component {
    render() {
        return(
            <div className='row'>
                
                <GMNotes/>
                <DiceRoller/>
                <PlayerOverview/>
                <CombatOrder/>
                
            </div>
        )
    }
}