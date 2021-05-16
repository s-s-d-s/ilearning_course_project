const express = require('express')
const router = express.Router()
const Company = require('../models').Company

router.post('/company', async (req, res) => {
    const {companyId} = req.body
    const company = await Company.findOne({
        where: {
            id: companyId
        }
    })

    res.json({company: company})
})

module.exports = router