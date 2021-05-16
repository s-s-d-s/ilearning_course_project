import React, {useContext} from 'react'
import {Button, Form, FormControl, Nav, Navbar} from "react-bootstrap"
import {useHistory} from "react-router-dom"
import {AuthContext} from "../hooks/context.hook"

export const NavPanel = () => {
    const history = useHistory()
    const ctx = useContext(AuthContext)

    const signOutHandler = () => {
        ctx.signOut()
        history.push('/')
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Nav className="mr-auto">

                {ctx.token && <Nav.Link href="/viewcompanies">Companies</Nav.Link>}
                {ctx.token && <Nav.Link href="/createcompany">Create Company</Nav.Link>}

                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                    <Button variant="outline-info mr-sm-2">Search</Button>
                </Form>
            </Nav>

            {!ctx.token
                ? ( <>
                    <Button variant="outline-info mr-sm-2" onClick={() => history.push('/signin')}>Sign In</Button>
                    <Button variant="outline-info" onClick={() => history.push('/signup')}>Sign Up</Button>
                </>)
                : (<>
                    <Button variant="outline-info mr-sm-2" onClick={() => history.push('/profile')}>Profile</Button>
                    <Button variant="outline-info" onClick={signOutHandler}>Sign Out</Button>
                </>)}


        </Navbar>
    )
}
