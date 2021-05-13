const express = require('express')
const config = require('config')
const db = require('./models')
const app = express()

app.use(express.json({extended: true}))
app.use('/', require('./routes/router'))
app.use('/', require('./routes/signUp'))

const PORT = process.env.PORT || config.get('port') || 5000

app.listen(PORT, () => console.log(`Server start on port ---> ${PORT}`))

db.sequelize.sync().then(() => console.log('DB ---> Connected'))


