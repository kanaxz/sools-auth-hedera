const context = require('sools-core-client-shared/context')
module.exports = (req, res, next) => {
  if (!context.user) {
    return navigator.navigate('/login')
  }
  next()
}