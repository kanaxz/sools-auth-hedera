const template = require('./template.html')
const { auth, navigator } = require('sools-hedera/global')
const Component = require('sools-hedera/Component')
require('./style.scss')

module.exports = class Login extends Component {

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