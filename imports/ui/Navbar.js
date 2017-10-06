import React, {Component} from 'react';
import {Link} from 'react-router-dom';


const authenticatedNav = (
    <div>
    <li>
        <button>Logout</button>
    </li>
    <li>
        <button>Profile</button>
    </li>
</div>
)

export default class Navbar extends Component {
    render() {
        return(
            <nav className='row header'>
                <ul>
                    
                </ul>
            </nav>
        )
    }
}