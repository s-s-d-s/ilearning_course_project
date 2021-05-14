import React, {useContext} from "react"
import {AuthContext} from "../hooks/context.hook"

export const ViewCompanies = () => {
    const ctx = useContext(AuthContext)

    return(
        <div>
            <h1>LIST OF COMPANIES HERE</h1>
        </div>

    )
}