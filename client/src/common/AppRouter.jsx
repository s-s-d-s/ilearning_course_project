import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {NavPanel} from './NavPanel'
import {SignIn} from "../authentication/SignIn"
import {SignUp} from "../authentication/SignUp"
import {Home} from "../home/Home"
import {AuthContext} from "../hooks/context.hook"
import {useAuth} from "../hooks/auth.hook"
import {UserProfile} from "../user_profile/UserProfile";


export const AppRouter = () => {
    const {token, userId, signIn, signOut} = useAuth()
    return (
        <AuthContext.Provider value={{
            token, userId, signIn, signOut
        }}>
            <BrowserRouter>
                <NavPanel/>
                <Switch>
                    <Route path="/profile">
                        <UserProfile/>
                    </Route>
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
        </AuthContext.Provider>
    )
}


