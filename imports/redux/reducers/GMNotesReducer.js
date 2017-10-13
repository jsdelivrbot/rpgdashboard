//State is not app state, only this reducer's object
export default function(state = [], action) {
    //Add note to state on action
    switch (action.type) {
        case 'NOTE_ADDED':
            //Using ES6 spread to maintain state without mutation
            return [...state, action.payload]
    }
    return state;
}