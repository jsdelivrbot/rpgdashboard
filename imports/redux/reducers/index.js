import {combineReducers} from 'redux';

import GMNotesReducer from './GMNotesReducer';

//This is the application-wide state
const reduxStore = combineReducers({
    GMNotes: GMNotesReducer
})

export default reduxStore;