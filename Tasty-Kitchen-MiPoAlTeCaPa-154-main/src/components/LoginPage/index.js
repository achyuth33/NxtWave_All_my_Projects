import Cookies from 'js-cookie'
import {Component} from 'react'
import {Redirect} from 'react-router-dom'

import './index.css'

class Login extends Component {
  state = {usernameInput: '', passwordInput: ''}

  changeName = event => {
    this.setState({usernameInput: event.target.value})
  }

  changePassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  submitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitFailure = data => {
    this.setState({errorMsg: data.error_msg, error: true})
  }

  submitButton = async event => {
    event.preventDefault()
    const {passwordInput, usernameInput} = this.state
    const userDetails = {password: passwordInput, username: usernameInput}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const url = 'https://apis.ccbp.in/login'

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      const JwtToken = data.jwt_token
      Cookies.set('jwt_token', JwtToken, {expires: 30})
      this.submitSuccess()
    }
    this.submitFailure(data)
  }

  render() {
    const {usernameInput, passwordInput, errorMsg, error} = this.state

    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-page-container">
        <div className="login-card">
          <img
            src="https://res.cloudinary.com/dydlvwdqp/image/upload/v1634114448/Vector_zqonub.jpg"
            className="logo"
            alt="website logo"
          />
          <h1 className="title">Tasty kitchens</h1>
          <form onSubmit={this.submitButton} className="login-form">
            <h1 className="login-name">Login</h1>
            <div className="username-box">
              <label htmlFor="username" className="username">
                USERNAME
              </label>
              <input
                id="username"
                className="input-text"
                type="text"
                onChange={this.changeName}
                value={usernameInput}
              />
            </div>
            <div className="password-box">
              <label htmlFor="password" className="password">
                PASSWORD
              </label>
              <input
                id="password"
                className="input-password"
                type="password"
                onChange={this.changePassword}
                value={passwordInput}
              />
            </div>
            {error && <p className="error-msg">{errorMsg}</p>}

            <button type="submit" className="button">
              Login
            </button>
          </form>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dydlvwdqp/image/upload/v1634108212/Rectangle_1456_yytrgz.jpg"
            alt="website login"
            className="login-image"
          />
        </div>
      </div>
    )
  }
}

export default Login
