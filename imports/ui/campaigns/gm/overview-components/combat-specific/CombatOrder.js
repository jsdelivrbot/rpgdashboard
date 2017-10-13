import React, {Component} from 'react';

export default class CombatOrder extends Component {
    render(){
        return(
            <div className="col-sm-4">
                <h4>Combat Order</h4>
            </div>
        )
    }
}

// This component will render during combat encounters
// Will display proper turn order, along with turn completion status