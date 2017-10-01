import React from 'react';

export const mapUserCampaigns = (campaigns) => {
    if (campaigns.length > 0) {
        let renderedCampaigns = campaigns.map((campaign) => {
            return (
                <div key={campaign._id} className='row'>
                    <h3 className='col-md-offset-1'>{campaign._campaignName}</h3>
                </div>
            )
        })
        return renderedCampaigns;
    } else {
        return (
            <div className="row">
                <h3 className="col-md-offset-1">No Campaigns Yet</h3>
            </div>
        )
    }
}