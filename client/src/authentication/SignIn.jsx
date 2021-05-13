import React, {useState} from "react"
import {Alert, Button, Form} from "react-bootstrap"
import {useForm} from "react-hook-form"
import {ErrorMessage} from "@hookform/error-message"
import {sendRequest} from "../hooks/http.hook"
import {useAuth} from "../hooks/auth.hook"
import { useHistory } from "react-router-dom"
import './index.css'


export const SignIn = () => {
    const history = useHistory()
    const {register, handleSubmit, formState: {errors}} = useForm()
    const {signIn} = useAuth()
    const [message, setMessage] = useState(null)

    const onSubmit = data => sendRequest('/signin', 'POST', data)
        .then(res => {
            if (res.status >= 400) res.json().then(ctx => setMessage(ctx.message))
            else {
                res.json().then(ctx => signIn(ctx.token, ctx.userId))
                history.push('/')
            }
        })

    return (
        <div className="row mt-2 justify-content-center">
            <div className="col-4">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <div className="text-center font-weight-bold">SIGN IN</div>

                    <Form.Group>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            name="email"
                            placeholder="Enter email"
                            {...register("email", {
                                required: "Email is required",
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

                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            name="password"
                            type="password"
                            placeholder="Enter password"
                            {...register("password", {required: "Password is required"})}/>
                        <ErrorMessage
                            errors={errors}
                            name="password"
                            render={({message}) => <span className="err">{message}</span>}/>
                    </Form.Group>

                    <Button className="alert-success" type="submit">
                        Sign In
                    </Button>

                    <div className="mt-2">Don't have account? <a href="/signup">Create an account here</a>.</div>

                    <Alert className="info">
                        <Alert.Heading>{message}</Alert.Heading>
                    </Alert>
                </Form>
            </div>
        </div>
    )
}