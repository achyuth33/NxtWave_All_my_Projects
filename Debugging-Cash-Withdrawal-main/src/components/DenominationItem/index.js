import './index.css'

const DenominationItem = props => {
  // FIX7: props is function component should not be accessed with this
  const {denominationDetails, updateBalance} = props
  const {value} = denominationDetails
  //   FIX8: variable declaration should consist of keyword const
  const onUpdateBalance = () => {
    updateBalance(value)
  }

  return (
    <li className="denomination-item">
      <button
        type="button"
        className="denomination-button"
        // FIX9: methods is function component should not be accessed with this
        onClick={onUpdateBalance}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
