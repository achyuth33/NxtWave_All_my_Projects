import {Route, Switch, Redirect} from 'react-router-dom'
import {Component} from 'react'
import Home from './components/HomePage'
import Login from './components/LoginPage'
import KitchenContext from './KitchenContext'
import ProtectedRoute from './components/ProtectedRoute'
import RestaurantDetails from './components/RestaurantDetails'
import Cart from './components/MyCart'
import NotFound from './components/NotFound'

import './App.css'

const sortByOptions = [
  {
    id: 0,
    displayText: 'Highest',
    value: 'Highest',
  },
  {
    id: 2,
    displayText: 'Lowest',
    value: 'Lowest',
  },
]

class App extends Component {
  state = {addBtn: false, temporaryData: []}

  onAddBtn = list => {
    const localData1 = localStorage.getItem('cartData')
    const localData = JSON.parse(localData1)

    if (localData === null) {
      const cartItemData = []
      cartItemData.push({...list, quantity: 1})
      // console.log(cartItemData)
      //  localStorage.setItem('cartData', JSON.stringify(cartItemData))
      this.setState({temporaryData: cartItemData, addBtn: true})
    } else {
      const object = localData.find(each => each.name === list.name)
      if (object) {
        const cartItems = localData.map(each => {
          if (each.name === object.name) {
            const count = 1
            return {...each, quantity: count}
          }
          return each
        })
        //   localStorage.setItem('cartData', JSON.stringify(cartItems))
        this.setState({temporaryData: cartItems, addBtn: true})
      } else {
        localData.push({...list, quantity: 1})
        //  console.log(localData)
        //   localStorage.setItem('cartData', JSON.stringify(localData))
        this.setState({temporaryData: localData, addBtn: true})
      }
    }
  }

  updateLocalData = (itemDetails, cartValue) => {
    const {name} = itemDetails
    const data = localStorage.getItem('cartData')
    const parsedData = JSON.parse(data)

    const cartItemData = parsedData.map(each => {
      if (each.name === name) {
        const count = cartValue
        //  console.log(count)
        return {...each, quantity: count}
      }
      return each
    })
    //  console.log(cartValue)
    //  localStorage.setItem('cartData', JSON.stringify(cartItemData))
    this.setState({temporaryData: cartItemData, addBtn: true})
  }

  removeItem = (data1, name) => {
    const newData = data1.filter(each => each.name !== name)

    //  localStorage.setItem('cartData', JSON.stringify(newData))
    this.setState({temporaryData: newData, addBtn: true})
  }

  checkZero = itemDetails => {
    const {temporaryData} = this.state
    const result1 = temporaryData.filter(each => each.name !== itemDetails.name)

    // localStorage.setItem('cartData', JSON.stringify(result1))
    this.setState({temporaryData: result1, addBtn: true})
  }

  stateEmpty = () => {
    this.setState({temporaryData: [], addBtn: true})
  }

  render() {
    const {addBtn, temporaryData} = this.state
    if (addBtn) {
      localStorage.setItem('cartData', JSON.stringify(temporaryData))
    }

    return (
      <KitchenContext.Provider
        value={{
          sortByOptions,
          filter: this.filter,
          onAddBtn: this.onAddBtn,
          addBtn,
          updateLocalData: this.updateLocalData,
          temporaryData,
          removeItem: this.removeItem,
          checkZero: this.checkZero,
          stateEmpty: this.stateEmpty,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/restaurant/:id"
            component={RestaurantDetails}
          />
          <ProtectedRoute exact path="/cart" component={Cart} />
          <ProtectedRoute exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" component={NotFound} />
        </Switch>
      </KitchenContext.Provider>
    )
  }
}

export default App
