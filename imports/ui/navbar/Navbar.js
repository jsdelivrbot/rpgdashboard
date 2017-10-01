import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Navbar extends Component {
    render() {
        return(
            <div className="row header">
                <div className="section">
                    <nav>
                        {/*TODO: Fix this stupid navbar, toggle animation doesn't work*/}
                        <label htmlFor="menu-toggle" id="menu-toggle-label"/>
                            <input id="menu-toggle" type='checkbox'/>
                            <span className="icon-menu"></span>
                            
                        <ul className="menu">
                            <li className='float-right'>
                                <Link to='/'>Test</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}