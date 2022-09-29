const express = require('express')
var Userrouter = require('./Router/AccontRouter/User')
// const bodyParser = require('body-parser')
// const urlNew = bodyParser.urlencoded({extended:false})

const route = require('./Router/indexroutes')

var morgan = require('morgan')
const app = express()
const { connect,mssql } = require('./Database/configSQL')
app.use(morgan('combined'))
app.use(express.urlencoded())
app.use(express.json())



route(app)

// app.use('/user',Userrouter)


app.get('/',async (req, res) => {
 res.send("sdadasdsadsada")
})





app.listen(3020)