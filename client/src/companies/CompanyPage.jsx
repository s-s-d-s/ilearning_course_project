import React, {useEffect, useState} from 'react'
import queryString from 'query-string'
import {sendRequest} from "../hooks/http.hook"
import {Card} from "react-bootstrap"
import moment from "moment"


export const CompanyPage = () => {
    const companyId = queryString.parse(window.location.search)
    const [company, setCompany] = useState({
        companyName: null,
        bonusList: null,
        description: null,
        subject: null,
        amountOfMoney: null,
        createdAt: null,
        updatedAt: null
    })

    useEffect(() => {
        sendRequest('/company', 'POST', {companyId: companyId.id})
            .then(res => res.json().then(data => setCompany(data.company)))
    })

    return (
        <div className="row mt-2 justify-content-center">
            <div className="col-4">
                <Card className="text-center">

                    <Card.Header>
                        Company Profile
                        <img src="https://www.svgrepo.com/show/12496/users.svg"
                             width="25"
                             height="25"
                             hspace="5"
                             alt="Company"/>
                    </Card.Header>

                    <Card.Body>
                        <Card.Title>{company.companyName}</Card.Title>

                        <Card.Text>Description: {company.description}</Card.Text>

                        <Card.Text>Bonus List: {company.bonusList}</Card.Text>

                        <Card.Text>Subject: {company.subject}</Card.Text>

                        <Card.Text>Amount Of Money: {company.amountOfMoney}</Card.Text>
                    </Card.Body>

                    <Card.Footer className="text-muted">
                        Created At: {moment(company.createdAt).format('DD.MM.YYYY HH:mm')}
                    </Card.Footer>

                    <Card.Footer className="text-muted">
                        Last Update: {moment(company.updatedAt).format('DD.MM.YYYY HH:mm')}
                    </Card.Footer>
                </Card>
            </div>
        </div>
    )
}