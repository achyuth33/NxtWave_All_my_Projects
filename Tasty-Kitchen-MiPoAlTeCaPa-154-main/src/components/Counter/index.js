import {Component} from 'react'
import KitchenContext from '../../KitchenContext'

import './index.css'

class Counter extends Component {
  state = {cartValue: 1}

  componentDidMount() {
    this.getCartValue()
  }

  getCartValue = () => {
    // console.log('okkk')
    const {itemDetails} = this.props
    let cartData = localStorage.getItem('cartData')
    cartData = JSON.parse(cartData)

    if (cartData !== null) {
      const object = cartData.filter(each => each.name === itemDetails.name)
      //  console.log(object[0].quantity)
      this.setState({cartValue: object[0].quantity})
    } else {
      this.setState({cartValue: ''})
    }
  }

  render() {
    // const {cartValue} = this.state
    // console.log(cartValue)
    return (
      <KitchenContext.Consumer>
        {value => {
          const {updateLocalData, checkZero, stateEmpty} = value

          const updateLocalData1 = () => {
            const {itemDetails} = this.props
            const {cartValue} = this.state
            console.log(cartValue)
            if (cartValue === 0) {
              checkZero(itemDetails)
            } else {
              updateLocalData(itemDetails, cartValue)
            }
          }

          const {cartValue} = this.state
          if (cartValue === '') {
            stateEmpty()
          }

          const onDecrement = () => {
            if (cartValue > 1) {
              this.setState(
                prevState => ({
                  cartValue: prevState.cartValue - 1,
                }),
                updateLocalData1,
              )
            } else {
              this.setState(
                prevState => ({
                  cartValue: prevState.cartValue - 1,
                }),
                updateLocalData1,
              )
            }
          }

          const onIncrement = () => {
            this.setState(
              prevState => ({
                cartValue: prevState.cartValue + 1,
              }),
              updateLocalData1,
            )
          }
          // const {cartValue} = this.state
          const {home} = this.props
          const incBtn =
            home === 'cart' ? 'increment-quantity' : 'increment-count'
          console.log(incBtn)
          const descBtn =
            home === 'cart' ? 'decrement-quantity' : 'decrement-count'
          const count = home === 'cart' ? 'item-quantity' : 'active-count'
          return (
            <div className="button-container">
              <button
                type="button"
                onClick={onDecrement}
                testid={descBtn}
                className="minus-btn"
              >
                -
              </button>

              <p testid={count} className="cart-value">
                {cartValue}
              </p>

              <button
                type="button"
                onClick={onIncrement}
                testid={incBtn}
                className="plus-btn"
              >
                +
              </button>
            </div>
          )
        }}
      </KitchenContext.Consumer>
    )
  }
}

export default Counter
