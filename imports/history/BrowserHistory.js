import {createBrowserHistory} from 'history'

//This provides the browserHistory instance for the whole app
//I only need this because React-router v4 doesn't have a native 
//implementation like v3 did
export const browserHistory = createBrowserHistory();