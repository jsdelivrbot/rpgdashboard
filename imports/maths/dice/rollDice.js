export const rollDice = (dice) => {
    switch (dice.type) {
        case 'd20': 
           return calculate(20, dice.modifier, dice.number)
           break;
    }
}

//Actually does the math for the dice roll
const calculate = (range, modifier = 0, numberOfDice = 1) => {
    let results = [];
    for (i = 1; i <= numberOfDice; i++) {
        results.push((Math.floor(Math.random() * range) + 1) + modifier);
    }
    return results.reduce((a,b) => a + b, 0);
}

