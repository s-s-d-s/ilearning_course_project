import React, {useContext} from "react"
import {Button} from "react-bootstrap"
import {useHistory} from "react-router-dom"
import {AuthContext} from "../hooks/context.hook"
import {sendRequest} from "../hooks/http.hook"

export const DeleteAccount = () => {
    const history = useHistory()
    const ctx = useContext(AuthContext)

    const deleteAccountHandler = () => {
        sendRequest('/deleteaccount', 'POST', {userId: ctx.userId})
            .then(() => {
                ctx.signOut()
                history.push('/')
            })
    }

    return (
        <div className="row mt-2 justify-content-center">
            <div className="col-4">
                <h1>Are you sure to delete account ?</h1>

                <Button className="alert-danger mr-2" onClick={deleteAccountHandler}>
                    YES
                </Button>

                <Button className="alert-success" onClick={() => history.push('/profile')}>
                    NO
                </Button>
            </div>
        </div>
    )
}