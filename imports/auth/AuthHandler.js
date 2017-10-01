import {browserHistory} from '../history/BrowserHistory';

//Only logged-in users can go here
const authenticatedRoutes = [
    '/profile',
    '/campaign'
];

//Only guest users can go here
const unauthenticatedRoutes = [
    '/login',
    '/signup'
];

//Auto boot users off of pages they're not suppsed to be on
export const onAuthChange = (isAuthenticated) => {
    let currentPage = browserHistory.location.pathname;

    //Checks for /campaign route so I don't have to write out millions of possible campaign ids
    if (currentPage.length >= '/campaign'.length ){
        if (currentPage.substring(0, 9) === '/campaign') {
            currentPage = currentPage.substring(0, 9);
            console.log(currentPage)
        }
    }

    //If not a /campaign route, proceed as if nothing happened.
    const isUnauthenticatedPage = unauthenticatedRoutes.includes(currentPage);
    const isAuthenticatedPage = authenticatedRoutes.includes(currentPage);

    //Unauthenticated page handler
    if (isUnauthenticatedPage && isAuthenticated) {
        if(browserHistory.location.state) {
            browserHistory.replace(browserHistory.location.state.referrer, {})
        } else {
            browserHistory.replace('/profile');
        }
    //Authenticated page handler
    } else if (isAuthenticatedPage && !isAuthenticated) {

        browserHistory.replace('/login', {'referrer' : browserHistory.location.pathname})
    }
}