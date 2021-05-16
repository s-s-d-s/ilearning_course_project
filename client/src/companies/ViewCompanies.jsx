import React from "react"
import {Button, Card} from "react-bootstrap"

export const ViewCompanies = () => {

    return(
        <div className="container row">
            <Card style={{ width: '20rem' }}>
                <Card.Body>
                    <Card.Title>Company name</Card.Title>
                    <Card.Text>
                        Description
                    </Card.Text>
                    <Button className="primary">View more</Button>
                </Card.Body>
            </Card>
        </div>
    )
}