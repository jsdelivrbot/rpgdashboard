export const rolld20 = (numberOfDice = 1) => {
    console.log('Rolling number')
    return (numberOfDice * Math.floor(Math.random() * 20) + 1);
}