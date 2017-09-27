import React, {Component} from 'react';

const unauthenticatedNav = (
    <div>
        <li>
            <button>Login</button>
        </li>
        <li>
            <button>Signup</button>
        </li>
    </div>
)
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
            <nav>
                <ul>
                    
                </ul>
            </nav>
        )
    }
}