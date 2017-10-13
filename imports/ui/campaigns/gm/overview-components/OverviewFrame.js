import React, {Component} from 'react';

import TitleBar from './TitleBar';
import GeneralOverview from './GeneralOverview';
import CombatOverview from './CombatOverview';

export default class OverviewFrame extends Component {
    constructor(props) {
        super(props);
        this.Campaign = this.props.ActiveCampaign[0];
        this.state= { 
            combatMode: true
        }
    }
    render() {
        return (
            <div>
                <TitleBar title={this.Campaign._campaignName}/>
                <div>
                    {/*TODO: extract these to separate component for conditional rendering*/}
                    {this.state.combatMode ? <CombatOverview/> : <GeneralOverview/> }
                    <button onClick={() => {
                        this.state.combatMode ? this.setState({combatMode:false}) : this.setState({combatMode:true})
                        }}>Toggle combat mode</button>
                </div>
            </div>
        )
    }
}