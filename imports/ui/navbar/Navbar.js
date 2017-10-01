import React, {Component} from 'react';

export default class Navbar extends Component {
    render() {
        return(
            <div className="row header">
                <div className="section">
                    <nav>
                        <label htmlFor="menu-toggle" id="menu-toggle-label">
                            <input type="checkbox" name="" id="menu-toggle"/>
                        </label>
                        <ul className="menu">
                            Test
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}