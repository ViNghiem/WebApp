const User = require('./AccontRouter/User')

function route(app){
  app.use('/user',User)
}

module.exports = route