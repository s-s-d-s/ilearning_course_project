import React, {useEffect, useState} from "react"
import {Button, Card} from "react-bootstrap"
import {sendRequest} from "../hooks/http.hook"
import {Link} from "react-router-dom"
import moment from "moment"

export const ViewCompanies = () => {
    const [companies, setCompanies] = useState([{
        companyName: null,
        description: null,
        createdAt: null
    }])

    useEffect(() => {
        sendRequest('/viewcompanies', 'GET')
            .then(res => res.json().then(data => setCompanies(data.companies)))
    }, [])

    return (
        <div className="row mt-2 ml-1">
            {companies.map((item, key) =>
                <Card
                    key={key}
                    className="ml-1 mt-1"
                    border="primary"
                    style={{width: '23rem'}}>
                    <Card.Body>

                        <Card.Title>{item.companyName}</Card.Title>

                        <Card.Text>
                            Description: {item.description}
                        </Card.Text>

                        <Card.Text>
                            CreatedAt: {moment(item.createdAt).format('DD.MM.YYYY HH:mm')}
                        </Card.Text>
                        <Link to={`/company?id=${item.id}`}>
                            <Button>View More</Button>
                        </Link>
                    </Card.Body>
                </Card>
            )}
        </div>
    )
}