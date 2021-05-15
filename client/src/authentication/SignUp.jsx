import React, {useState} from "react"
import {Alert, Button, Form} from "react-bootstrap"
import {useForm} from "react-hook-form"
import {ErrorMessage} from '@hookform/error-message'
import {sendRequest} from "../hooks/http.hook"
import './index.css'

export const SignUp = () => {
    const [message, setMessage] = useState(null)
    const {register, handleSubmit, formState: {errors}} = useForm()

    const onSubmit = data => sendRequest('/signup', 'POST', data)
        .then(res => res.json().then(ctx => setMessage(ctx.message)))

    return (

        <div className="row mt-2 justify-content-center">
            <div className="col-4">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <div className="text-center font-weight-bold">SIGN UP</div>

                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            name="username"
                            placeholder="Enter username"
                            {...register("username", {required: "Username is required"})}/>
                        <ErrorMessage
                            errors={errors}
                            name="username"
                            render={({message}) => <span className="err">{message}</span>}/>
                    </Form.Group>

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
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 8,
                                    message: "Short password"
                                }
                            })}/>
                        <ErrorMessage
                            errors={errors}
                            name="password"
                            render={({message}) => <span className="err">{message}</span>}/>
                    </Form.Group>

                    <Button className="alert-primary mr-2" type="submit">
                        Sign Up
                    </Button>

                    <Alert className="info">
                        <Alert.Heading>{message}</Alert.Heading>
                    </Alert>
                </Form>
            </div>
        </div>
    )
}