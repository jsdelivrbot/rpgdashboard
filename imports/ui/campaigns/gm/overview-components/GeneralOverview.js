import React, {Component} from 'react';

import GMNotes from './general/GMNotes';
import PlayerOverview from './general/PlayerOverview';
import DiceRoller from './general/DiceRoller';

export default class GeneralOverview extends Component {
    render() {
        return(
            <div className='row'>
                <GMNotes/>
                <DiceRoller />
                <PlayerOverview/>
            </div>
        )
    }
}