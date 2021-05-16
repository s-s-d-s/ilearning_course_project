const express = require('express')
const router = express.Router()
const Company = require('../models').Company

router.get('/', (req, res) => {
    res.json({message: 'OK'})
})

module.exports = router