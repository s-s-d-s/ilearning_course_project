const express = require('express')
const router = express.Router()
const User = require('../models').User

router.post('/profile', async (req, res) => {
    const {userId} = req.body
    if (userId === null) {}
    else {
        const user = await User.findOne({
            where: {
                id: userId
            }
        })

        res.json({
            username: user.username,
            email: user.email,
            createdAt: user.createdAt
        })
    }

})

module.exports = router