import React, {Component} from 'react';

import TitleBar from './TitleBar'

export default class OverviewFrame extends Component {
    constructor(props) {
        super(props);
        this.Campaign = this.props.ActiveCampaign[0];
    }
    render() {
        return (
            <div>
                <TitleBar title={this.Campaign._campaignName}/>
            </div>
        )
    }
}