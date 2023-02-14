const express = require('express')
var Userrouter = require('./Router/AccontRouter/User')
const route = require('./Router/indexroutes')
var morgan = require('morgan')
const app = express()

app.use(morgan('combined'))
app.use(express.urlencoded())
app.use(express.json())


route(app)

app.get('/',async (req, res) => {
 res.send("sdadasdsadsada")
})





app.listen(process.env.PORT)