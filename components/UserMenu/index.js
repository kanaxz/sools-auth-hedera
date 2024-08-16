const template = require('./template.html')
const { components: { Interface } } = require('sools-hedera/global')
const context = require('sools-core-client/context')
require('./style.scss')

module.exports = class UserMenu extends Interface {
  constructor() {
    super()
    this.isOpen = false
  }
}
  .define({
    name: 'user-menu',
    template,
  })
  .properties({
    isOpen: 'any',
  })
  .variables({
    context,
  })