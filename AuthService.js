const axios = require('axios')
const Service = require('sools-hedera/Service')
const { User } = require('sools-auth')
const context = require('sools-core-client/context')
const { defaultLoad } = require('sools-auth/utils')
module.exports = class AuthService extends Service {
  constructor(url) {
    super()
    this.url = url
    this.me = null
    this.on('propertyChanged:me', this.b(this.onMeChanged))
  }

  onMeChanged() {
    context.user = this.me
  }

  parseUser(json) {
    const user = User.parse(json, { singleInstance: true })
    user.setLoadState(defaultLoad)
    return user
  }

  async request(action, payload) {
    const url = `${this.url}/auth${action}`
    const response = await axios({
      url,
      method: 'POST',
      data: payload,
      withCredentials: true,
    })

    return response.data
  }

  async getMe() {
    this.me = await User.collection.getMe()
  }

  async login(user) {
    const { me } = await this.request('/login', user)
    this.me = this.parseUser(me)
  }

  async changePassword(user) {
    const response = await this.request('/change-password', user)
    return response
  }

  async signup(user) {
    const { me } = await this.request('/signup', user)
    this.me = this.parseUser(me)
  }

  async logout() {
    await this.request('/logout')
    this.me = null
  }
}
  .define()
  .properties({
    me: 'any',
  })

