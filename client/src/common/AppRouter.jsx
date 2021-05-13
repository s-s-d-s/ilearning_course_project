import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {NavPanel} from './NavPanel'
import {SignIn} from "../authentication/SignIn";
import {SignUp} from "../authentication/SignUp";
import {Home} from "../home/Home";


export const AppRouter = () => {
    return (
        <BrowserRouter>
            <NavPanel/>
            <Switch>
                <Route path="/signin">
                    <SignIn/>
                </Route>
                <Route path="/signup">
                    <SignUp/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}


