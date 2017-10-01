import React, {Component} from 'react';

export default class Navbar extends Component {
    render() {
        return(
            <div className="row header">
                <div className="section">
                    <nav>
                        {/*TODO: Fix this stupid navbar*/}
                        <label htmlFor="menu-toggle" id="menu-toggle-label">
                            <span className="item-menu"></span>
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