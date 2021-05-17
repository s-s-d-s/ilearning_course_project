import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {NavPanel} from './NavPanel'
import {SignIn} from "../authentication/SignIn"
import {SignUp} from "../authentication/SignUp"
import {Home} from "../home/Home"
import {AuthContext} from "../hooks/context.hook"
import {useAuth} from "../hooks/auth.hook"
import {UserProfile} from "../user_profile/UserProfile"
import {CreateCompany} from "../companies/CreateCompany"
import {ViewCompanies} from "../companies/ViewCompanies"
import {EditProfile} from "../user_profile/EditProfile"
import {DeleteAccount} from "../user_profile/DeleteAccount"
import {CompanyPage} from "../companies/CompanyPage"


export const AppRouter = () => {
    const {token, userId, signIn, signOut} = useAuth()
    return (
        <AuthContext.Provider value={{
            token, userId, signIn, signOut
        }}>
            <BrowserRouter>
                <NavPanel/>
                <Switch>
                    <Route path="/createcompany">
                        <CreateCompany/>
                    </Route>
                    <Route path="/company">
                        <CompanyPage/>
                    </Route>
                    <Route path="/viewcompanies">
                        <ViewCompanies/>
                    </Route>
                    <Route path="/editprofile">
                        <EditProfile/>
                    </Route>
                    <Route path="/deleteaccount">
                        <DeleteAccount/>
                    </Route>
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


