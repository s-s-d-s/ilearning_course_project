const express = require('express')
const router = express.Router()
const User = require('../models').User

router.post('/editprofile', async (req, res) => {
    const {userId, username, email} = req.body

    const user = await User.findOne({
        where: {
            id: userId
        }
    })

    if (username === '') {
        console.log('do nothing')
    } else user.username = username

    if (email === '') {
        console.log('do nothing')
    } else user.email = email

    user.save()
    res.json({message: 'Profile Updated'})
})

module.exports = router