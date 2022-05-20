import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Footer from '../Footer'
import Header from '../Header'
import RestaurantItems from '../RestaurantItems'

import './index.css'

class RestaurantDetails extends Component {
  state = {status: 'progress', restaurantContent: '', dataResList: []}

  componentDidMount() {
    this.restaurantDetails()
  }

  updatedResList = dataList => {
    const restaurantData = {
      rating: dataList.rating,
      name: dataList.name,
      cost: dataList.cost_for_two,
      cuisine: dataList.cuisine,
      imageUrl: dataList.image_url,
      location: dataList.location,
      id: dataList.id,
      reviewCount: dataList.reviews_count,
    }

    const itemData = dataList.food_items.map(each => ({
      //  rating: each.user_rating.rating,
      name: each.name,
      imageUrl: each.image_url,
      id: each.id,
      cost: each.cost,
      rating: each.rating,
    }))

    // console.log(dataList.food_items)
    this.setState({
      dataResList: itemData,
      restaurantContent: restaurantData,
      status: 'success',
    })
  }

  getFailure = () => {
    const {history} = this.props
    console.log(history)
    history.replace('/not-found')
  }

  restaurantDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const restaurantId = Number(id)
    // console.log(typeof id, typeof restaurantId)

    const token = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }

    const url = `https://apis.ccbp.in/restaurants-list/${restaurantId}`

    const response = await fetch(url, options)
    const data = await response.json()
    //  console.log(data)
    if (response.ok === true) {
      this.updatedResList(data)
    } else {
      this.getFailure()
    }
  }

  getResList = () => {
    const {restaurantContent, dataResList} = this.state
    const {
      imageUrl,
      name,
      rating,
      reviewCount,
      cost,
      cuisine,
      location,
    } = restaurantContent

    return (
      <div>
        <div className="header-container">
          <img src={imageUrl} alt="restaurant" className="res-name-image" />
          <div className="res-details-address">
            <h1 className="res-name-details">{name}</h1>
            <p className="res-name-below">{cuisine}</p>
            <p className="res-name-below">{location}</p>
            <div className="res-details-rating-cont">
              <div className="res-rating-cost-show">
                <p className="rating-cost">{rating}</p>
                <p className="review-cost-count">{reviewCount}+Ratings</p>
              </div>
              <hr className="res-line" />
              <div className="res-rating-cost-show">
                <p className="rating-cost">{cost}</p>
                <p className="review-cost-count">Cost for two</p>
              </div>
            </div>
          </div>
        </div>
        <div className="res-main-item-container">
          <ul className="res-item-container">
            {dataResList.map(each => (
              <RestaurantItems key={each.id} resList={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  loader = () => (
    <div
      className="products-loader-container"
      testid="restaurant-details-loader"
    >
      <Loader type="Oval" color="orange" height={50} width={50} />
    </div>
  )

  loadingStatus = () => {
    const {status, dataList} = this.state
    switch (status) {
      case 'success':
        return this.getResList(dataList)
      case 'progress':
        return this.loader()
      case 'failure':
        return this.failure()
      default:
        return null
    }
  }

  render() {
    // console.log('kumar')
    return (
      <div>
        <Header home="home" />
        {this.loadingStatus()}
        <Footer />
      </div>
    )
  }
}

export default RestaurantDetails
