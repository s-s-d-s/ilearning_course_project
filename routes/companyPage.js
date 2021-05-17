const express = require('express')
const router = express.Router()
const Company = require('../models').Company
const User = require('../models').User

router.post('/company', async (req, res) => {
    const {companyId} = req.body
    const company = await Company.findOne({
        where: {
            id: companyId
        }
    })

    const owner = await User.findOne({
        where: {
            id: company.UserId
        }
    })

    company.UserId = owner.username
    res.json({company: company})
})

module.exports = router