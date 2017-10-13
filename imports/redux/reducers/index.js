import {combineReducers} from 'redux';

import GMNotesReducer from './GMNotesReducer';

//This is the application-wide state
const rootReducer = combineReducers({
    GMNotes: GMNotesReducer
})

export default rootReducer;