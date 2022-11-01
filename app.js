const express = require('express')
const {connect} = require('mongoose')
const path = require('path')

connect().then(() => console.log('DB is running!'))

const indexRouter = require('./routes/index')

let app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)

module.exports = app
