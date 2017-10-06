import React from 'react';
import {Link} from 'react-router-dom'

export const AuthenticatedNav = () => {
    return(
        <div>
            <li>
                <Link to='/profile' >Profile</Link>
            </li>
        </div>
    )
}