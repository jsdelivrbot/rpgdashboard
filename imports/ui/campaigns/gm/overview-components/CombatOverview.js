import React, {Component} from 'react';

import GMNotes from './general/GMNotes';
import PlayerOverview from './general/PlayerOverview';
import CombatOrder from './combat-specific/CombatOrder';

export default class CombatOverview extends Component {
    render() {
        return(
            <div className='row'>
                
                <GMNotes/>
                <PlayerOverview/>
                <CombatOrder/>
            </div>
        )
    }
}