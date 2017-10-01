import React from 'react';
import {createBrowserHistory} from 'history';

import {logout} from '../../auth/Logout';
import {browserHistory} from '../../history/BrowserHistory';

export const UserOptions = () => {
    return (
        //These are the Profile page buttons for user control
            <div className='row'>
                <div className="row">
                    <div className="col-1-5 space"></div>
                    <h3 className='col-1-3'>Profile Page</h3>
                </div>
                <div className="row">
                    <div className="col-1-5 space"></div>
                    <button
                    onClick={() => logout()}>Logout</button>
                    <button
                    onClick={() => {
                        browserHistory.push('/campaign/new');
                    }}>Create Campaign</button>
                </div>
            </div>
        
    )   
}
