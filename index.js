const express = require('express')
const config = require('config')
const db = require('./models')
const app = express()

app.use(express.json({extended: true}))
app.use('/', require('./routes/router'))
app.use('/', require('./routes/signUp'))
app.use('/', require('./routes/signIn'))
app.use('/', require('./routes/createCompany'))
app.use('/', require('./routes/viewCompanies'))
app.use('/', require('./routes/userProfile'))
app.use('/', require('./routes/deleteAccount'))
app.use('/', require('./routes/editProfile'))
app.use('/', require('./routes/companyPage'))

const PORT = process.env.PORT || config.get('port') || 5000

app.listen(PORT, () => console.log(`Server start on port ---> ${PORT}`))

db.sequelize.sync().then(() => console.log('DB ---> Connected'))


