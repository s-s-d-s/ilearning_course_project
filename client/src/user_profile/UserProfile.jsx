import React, {useContext} from "react"
import {AuthContext} from "../hooks/context.hook"

export const UserProfile = () => {
    const ctx = useContext(AuthContext)

    return(
        <div>
            {!ctx.token
                ? <h1>PLS SIGN IN</h1>
                : <h1>User Profile</h1>
            }
        </div>

    )
}