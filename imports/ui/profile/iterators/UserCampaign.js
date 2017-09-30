import React from 'react';

export const mapUserCampaigns = (campaigns) => {
    if (campaigns.length > 0) {
        let renderedCampaigns = campaigns.map((campaign) => {
            return (
                <div key={campaign._id} className='row'>
                    <div className="col-1-4 space" />
                    <h3 className='col-1-3'>{campaign._campaignName}</h3>
                </div>
            )
        })
        return renderedCampaigns;
    } else {
        return (
            <div className="row">
                <div className="col-1-4 space" />
                <h3 className="col-1-3">No Campaigns Yet</h3>
            </div>
        )
    }
}