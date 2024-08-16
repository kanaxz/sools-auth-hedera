const template = require('./template.html')
const { navigator, auth } = require('sools-hedera/global')
const Component = require('sools-hedera/Component')
const Credentials = require('sools-management/Credentials')

require('./style.scss')

module.exports = class Signup extends Component {
  async onSubmit({ object }) {
    console.log('submitting')
    await auth.signup(object)
    await navigator.navigate('/')
  }
}
  .define({
    name: 'signup-page',
    template,
  })
  .variables({
    Credentials
  })