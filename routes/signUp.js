const express = require('express')
const bcrypt = require('bcryptjs')
const {Op} = require("sequelize")
const {User} = require('../models')
const router = express.Router()

router.post('/signup', async (req, res) => {
    const {username, email, password} = req.body

    const person = await User.findAll({
        where: {
            [Op.or]: [
                { username: username },
                { email: email }
            ]
        }
    })

    if (person.length === 0) {
        const hashPassword = await bcrypt.hash(password, 12)
        await User.create({
            username: username,
            email: email,
            password: hashPassword
        })

        res.status(201).json({message: 'Registration successfully'})
    } else return res.status(400).json({message: 'User already exist'})
})

module.exports = router