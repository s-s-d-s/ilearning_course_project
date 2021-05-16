const express = require('express')
const router = express.Router()
const Company = require('../models').Company

router.get('/viewcompanies', async (req, res) => {
    const companies = await Company.findAll()

    res.json({companies: companies})
})

module.exports = router