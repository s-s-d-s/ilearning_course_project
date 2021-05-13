import React from "react"
import {Button, Form} from "react-bootstrap"
import {useForm} from "react-hook-form"
import {ErrorMessage} from "@hookform/error-message"
import './index.css'

export const SignIn = () => {
    const {register, handleSubmit, formState: {errors}} = useForm()
    const onSubmit = data => alert(JSON.stringify(data))

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
                </Form>
                <div className="mt-2">Don't have account? <a href="/signup">Create an account here</a>.</div>
            </div>
        </div>
    )
}