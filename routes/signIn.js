const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const {User} = require('../models')
const router = express.Router()


router.post('/signin', async (req, res) => {
    const {email, password} = req.body

    const user = await User.findAll({
        where: {
            email: email
        }
    })

    if (user.length === 0) return res.status(400).json({message: 'No such user with this email'})

    const isMatch = await bcrypt.compare(password, user[0].password)

    if (!isMatch) return res.status(400).json({message: 'Incorrect password. Try again'})

    const token = jwt.sign(
        {userId: user[0].id},
        config.get('jwtSecret'),
        {expiresIn: '1h'}
    )

    res.json({token: token, userId: user[0].id})
})

module.exports = router