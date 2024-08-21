const Row = require('sools-modeling-hedera/components/Row')
const template = require('./template.html')
const { User } = require('sools-auth')
require('./style.scss')

module.exports = class UserRow extends Row {

}
  .define({
    name: 'user-row',
    template,
  })
  .register(User, 'row')