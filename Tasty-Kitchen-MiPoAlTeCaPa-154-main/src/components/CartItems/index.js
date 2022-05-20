import Counter from '../Counter'
import './index.css'

const CartItems = props => {
  const {items} = props
  const {name, imageUrl, cost, quantity} = items
  return (
    <li className="list-cart" testid="cartItem">
      <div className="cart-name-img">
        <img src={imageUrl} alt="restaurant-id" className="cart-image" />
        <h1 className="cart-item-name">{name}</h1>
      </div>
      <Counter itemDetails={items} home="cart" />
      <p className="cost-total">₹ {quantity * cost}</p>
    </li>
  )
}

export default CartItems
