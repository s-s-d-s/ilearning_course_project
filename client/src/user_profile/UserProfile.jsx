import React, {useContext, useEffect, useState} from "react"
import {AuthContext} from "../hooks/context.hook"
import {Button, Card} from "react-bootstrap"
import {sendRequest} from "../hooks/http.hook"
import {Link} from "react-router-dom"
import moment from "moment"


export const UserProfile = () => {
    const ctx = useContext(AuthContext)
    const [username, setUsername] = useState(null)
    const [email, setEmail] = useState(null)
    const [createdAt, setCreatedAt] = useState(null)

    useEffect(() => {
        sendRequest('/profile', 'POST', {userId: ctx.userId})
            .then(res => res.json().then(data => {
                setUsername(data.username)
                setEmail(data.email)
                setCreatedAt(moment(data.createdAt).format('DD.MM.YYYY HH:mm'))
            }))
    }, [ctx])


    return (
        <div className="row mt-2 justify-content-center">
            <div className="col-4">
                {!ctx.token
                    ?
                    <>
                        <h1>Please Sign In <Link to="/signin">HERE</Link>
                        </h1>
                    </>
                    : <>
                        <Card className="text-center">
                            <Card.Header>
                                User Profile
                                <img src="https://freesvg.org/img/abstract-user-flat-4.png"
                                     width="25"
                                     height="25"
                                     hspace="5"
                                     alt="User"/>
                            </Card.Header>

                            <Card.Body>
                                <Card.Title>Username: {username}</Card.Title>
                                <Card.Text>Email: {email}</Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted">Created AT: {createdAt}</Card.Footer>
                            <Button className="primary">Edit Profile</Button>
                            <Button className="primary mt-2">Delete Account</Button>
                        </Card>
                    </>
                }
            </div>
        </div>
    )
}