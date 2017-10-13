//State is not app state, only this reducer's object
export default function(state, action) {
    console.log(action);
    return [
        {note: 'Testing Testing'},
        {note: 'Read all about it'}
    ]
}