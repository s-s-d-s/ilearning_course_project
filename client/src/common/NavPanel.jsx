import React, {useContext, useState} from 'react'
import {Button, Form, FormControl, Nav, Navbar} from "react-bootstrap"
import {Link, useHistory} from "react-router-dom"
import {AuthContext} from "../hooks/context.hook"

export const NavPanel = () => {
    const [search, setSearch] = useState(null)
    const history = useHistory()
    const ctx = useContext(AuthContext)

    const signOutHandler = () => {
        ctx.signOut()
        history.push('/')
    }

    const searchHandler = () => {
        history.push(`/search?r=${search}`)
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Nav className="mr-auto">

                {ctx.token &&
                <>
                    <Link to="/viewcompanies">
                        <Button variant="outline-info">Companies</Button>
                    </Link>
                </>}
                {ctx.token &&
                <>
                    <Link to="/createcompany">
                        <Button variant="outline-info ml-1 mr-1">Create Company</Button>
                    </Link>
                </>}

                <Form inline>
                    <FormControl type="text"
                                 placeholder="Search"
                                 className="mr-sm-2"
                                 onChange={(e => setSearch(e.target.value))}/>
                    <Button
                        className="outline-info mr-sm-2"
                        onClick={searchHandler}>
                        Search
                    </Button>
                </Form>
            </Nav>

            {!ctx.token
                ? (<>
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
