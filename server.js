if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const moongose = require('mongoose')
const app = express()
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

moongose.connect(process.env.DATABASE_URL, { useNewUrlParser:true })
const db = moongose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected Succesfully'))

app.use('/', indexRouter)

app.listen(process.env.PORT || 3000)