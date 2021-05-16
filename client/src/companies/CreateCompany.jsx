import React, {useContext, useState} from "react"
import {AuthContext} from "../hooks/context.hook"
import {Alert, Button, Form} from "react-bootstrap"
import {ErrorMessage} from "@hookform/error-message"
import {useForm} from "react-hook-form"
import {sendRequest} from "../hooks/http.hook"

export const CreateCompany = () => {
    const ctx = useContext(AuthContext)
    const [message, setMessage] = useState(null)
    const {register, handleSubmit, formState: {errors}} = useForm()
    const onSubmit = data => {
        data.userId = ctx.userId
        sendRequest('/createcompany', 'POST', data).then(res => res.json().then(ctx => setMessage(ctx.message)))
    }

    return(
        <div className="row mt-2 justify-content-center">
            <div className="col-4">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <div className="text-center font-weight-bold">CREATE COMPANY</div>

                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            name="name"
                            placeholder="Enter name"
                            {...register("name", {
                                required: "Name is required"
                            })}/>
                        <ErrorMessage
                            errors={errors}
                            name="name"
                            render={({message}) => <span className="err">{message}</span>}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Bonuses</Form.Label>
                        <Form.Control
                            name="bonusList"
                            placeholder="Enter bonuses"
                            {...register("bonusList", {required: false})}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Short Description</Form.Label>
                        <Form.Control
                            name="description"
                            placeholder="Enter description"
                            {...register("description", {required: false})}/>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control
                            name="subject"
                            as="select"
                            {...register("subject")}>
                            <option>Electronics</option>
                            <option>Education</option>
                            <option>Sport</option>
                            <option>TV</option>
                            <option>Games</option>
                            <option>Shop</option>
                            <option>Music</option>
                            <option>Development</option>
                            <option>Other</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Amount Of Money $</Form.Label>
                        <Form.Control
                            name="amountOfMoney"
                            placeholder="Enter amount of money"
                            {...register("amountOfMoney", {
                                required: "Amount of money is required",
                                pattern: {
                                    value: /^[0-9]/i,
                                    message: 'Must be a number'
                                }
                            })}/>
                        <ErrorMessage
                            errors={errors}
                            name="amountOfMoney"
                            render={({message}) => <span className="err">{message}</span>}/>
                    </Form.Group>

                    <Button className="alert-success" type="submit">
                        Create
                    </Button>

                    <Alert className="info">
                        <Alert.Heading>{message}</Alert.Heading>
                    </Alert>
                </Form>
            </div>
        </div>
    )
}