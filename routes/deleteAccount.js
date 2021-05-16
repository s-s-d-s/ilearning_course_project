const express = require('express')
const router = express.Router()
const User = require('../models').User

router.post('/deleteaccount', async (req, res) => {
    const {userId} = req.body
    await User.destroy({
        where: {
            id: userId
        }
    })

    res.json({message: 'User deleted successfully'})
})

module.exports = router