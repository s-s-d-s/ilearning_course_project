const express = require('express')
const router = express.Router()
const Company = require('../models').Company

router.post('/createcompany', async (req, res) => {
    const {name, bonusList, description, subject, amountOfMoney, userId} = req.body

    const company = await Company.findAll({
        where: {
            companyName: name
        }
    })

    if (company.length === 0) {
        await Company.create({
            companyName: name,
            bonusList: bonusList,
            description: description,
            subject: subject,
            amountOfMoney: amountOfMoney,
            UserId: userId
        })

        res.status(201).json({message: 'Company created successfully'})
    } else return res.status(400).json({message: 'Company already exist'})
})

module.exports = router