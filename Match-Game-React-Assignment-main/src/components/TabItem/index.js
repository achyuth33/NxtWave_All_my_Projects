import './index.css'

const TabItem = props => {
  const {tabDetails, active, onClick} = props

  const onClickTabItem = () => {
    onClick(tabDetails.tabId)
  }
  return (
    <li className="tab-item">
      <button
        className={`tab-item-button ${active ? 'active-tab' : ''}`}
        type="button"
        onClick={onClickTabItem}
      >
        {tabDetails.displayText}
      </button>
    </li>
  )
}
export default TabItem
