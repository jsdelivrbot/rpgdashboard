import React, {Component} from 'react';

import TitleBar from './TitleBar';
import GMNotes from './general/GMNotes';
import PlayerOverview from './general/PlayerOverview';
import CombatOrder from './combat-specific/CombatOrder';

export default class OverviewFrame extends Component {
    constructor(props) {
        super(props);
        this.Campaign = this.props.ActiveCampaign[0];
    }
    render() {
        return (
            <div>
                <TitleBar title={this.Campaign._campaignName}/>
                <div className='row'>
                    {/*TODO: extract these to separate component for conditional rendering*/}
                    <PlayerOverview/>
                    <CombatOrder/>
                    <GMNotes />
                </div>
            </div>
        )
    }
}