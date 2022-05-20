import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const activeTabClassName = isActive ? 'active-tab-btn' : ''

  const onCLickTabItem = () => {
    updateActiveTabId(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabClassName}`}
        onClick={onCLickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
