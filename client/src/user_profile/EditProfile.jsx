import React, {useContext, useState} from "react"
import {Alert, Button, Form} from "react-bootstrap"
import {ErrorMessage} from "@hookform/error-message"
import {useForm} from "react-hook-form"
import {sendRequest} from "../hooks/http.hook"
import {AuthContext} from "../hooks/context.hook"


export const EditProfile = () => {
    const ctx = useContext(AuthContext)
    const {register, handleSubmit, formState: {errors}} = useForm()
    const [message, setMessage] = useState(null)

    const onSubmit = data => {
        if (data.username === '' && data.email === '') {
            setMessage('Enter some data to update you profile')
        } else {
            setMessage(null)
            data.userId = ctx.userId
            sendRequest('/editprofile', 'POST', data)
                .then(res => res.json()
                .then(ctx => setMessage(ctx.message)))
        }
    }


    return (
        <div className="row mt-2 justify-content-center">
            <div className="col-4">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <div className="text-center font-weight-bold">EDIT USER PROFILE</div>

                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            name="username"
                            placeholder="Enter new username"
                            {...register("username")}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            name="email"
                            placeholder="Enter new email"
                            {...register("email", {
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Incorrect email address'
                                }
                            })}/>
                        <ErrorMessage
                            errors={errors}
                            name="email"
                            render={({message}) => <span className="err">{message}</span>}/>
                    </Form.Group>

                    <Button className="alert-primary mr-2" type="submit">
                        Update Profile
                    </Button>

                    <Alert className="info">
                        <Alert.Heading>{message}</Alert.Heading>
                    </Alert>
                </Form>
            </div>
        </div>
    )
}