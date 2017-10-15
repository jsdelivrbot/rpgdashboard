import React from 'react';

const rollD20 = (numberOfDice) => {
    return (numberOfDice * Math.floor(Math.random() * 20) +1);
}

export const D20 = (props) => {
    return(
        <div>
            <button>Roll d20</button>
            <div>
                {rollD20(props.number)}
            </div>
        </div>
    )
}