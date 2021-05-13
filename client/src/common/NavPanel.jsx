import React from 'react'
import {Button, Form, FormControl, Nav, Navbar} from "react-bootstrap"

export const NavPanel = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#">Company</Nav.Link>
                <Nav.Link href="##">Create</Nav.Link>
                <Nav.Link href="####">About</Nav.Link>

                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                    <Button variant="outline-info mr-sm-2">Search</Button>
                </Form>
            </Nav>

            <Button variant="outline-info mr-sm-2" href="/signin">Sign In</Button>
            <Button variant="outline-info" href="/signup">Sign Up</Button>
        </Navbar>
    )
}
