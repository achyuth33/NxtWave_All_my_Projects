import './index.css'

const LogoutPopup = props => {
  const {logoutPage, cancelLogout} = props
  const confirmClicked = () => {
    logoutPage()
  }
  const cancelClicked = () => {
    cancelLogout()
  }
  return (
    <div className="popupDiv">
      <p className="p6">Are you sure, you want to logout</p>
      <div className="popupDiv1">
        <button type="button" className="button7" onClick={cancelClicked}>
          Cancel
        </button>
        <button type="button" className="button8" onClick={confirmClicked}>
          Confirm
        </button>
      </div>
    </div>
  )
}
export default LogoutPopup
