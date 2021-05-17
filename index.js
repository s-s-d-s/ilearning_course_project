const express = require('express')
const config = require('config')
const db = require('./models')
const path = require('path')

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

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'client', 'build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = process.env.PORT || config.get('port') || 5000

app.listen(PORT, () => console.log(`Server start on port ---> ${PORT}`))

db.sequelize.sync().then(() => console.log('DB ---> Connected'))


