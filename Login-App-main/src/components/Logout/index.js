import './index.css'

const Logout = props => {
  const {onClickLogout} = props
  return (
    <button type="button" className="logout-button" onClick={onClickLogout}>
      Logout
    </button>
  )
}

export default Logout
