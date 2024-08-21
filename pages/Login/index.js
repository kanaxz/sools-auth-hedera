const template = require('./template.html')
const { auth, navigator } = require('sools-hedera/global')
const Component = require('sools-hedera/Component')
const Credentials = require('sools-auth/Credentials')
require('./style.scss')

module.exports = class Home extends Component {

  onInit() {

  }

  async onSubmit({ object }) {
    console.trace('onSubmit')

    await auth.login(object)
    await navigator.navigate('/')
  }
}
  .define({
    name: 'login-page',
    template,
  })
  .variables({
    Credentials
  })