import React from 'react';
import {Link} from 'react-router-dom'

export const UnauthenticatedNav = () => {
    return(
        <div>
            <li>
                <Link to='/login'>Login</Link>
            </li>
            <li>
                <Link to='/signup' >Signup</Link>
            </li>
        </div>
    )
}