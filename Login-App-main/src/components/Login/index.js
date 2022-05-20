import './index.css'

const Login = props => {
  const {onClickLogin} = props
  return (
    <button type="button" className="login-button" onClick={onClickLogin}>
      Login
    </button>
  )
}

export default Login
