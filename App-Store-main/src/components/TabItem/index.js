import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails
  const onClickTabItem = () => {
    clickTabItem(tabId)
  }

  const tabBtnClassName = isActive ? 'tab-button active' : 'tab-button'

  return (
    <li className="tab-item">
      <button
        type="button"
        onClick={onClickTabItem}
        className={tabBtnClassName}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
