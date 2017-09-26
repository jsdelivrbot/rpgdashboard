import React from 'react'
import {BrowserRouter, withRouter, Route} from 'react-router-dom'

import Home from '../ui/Home'
import Login from '../auth/Login'

export const router = (
        <BrowserRouter>
            <div>
                <Route path='/' exact component={Home} />
                <Route path='/login' component={Login} />
            </div>
        </BrowserRouter>
    );