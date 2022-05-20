import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
import {MdSort} from 'react-icons/md'
import Header from '../Header'
import Carousel from '../Carousel'
import RestaurantList from '../RestaurantList'
import KitchenContext from '../../KitchenContext'
import Footer from '../Footer'

import './index.css'

class Home extends Component {
  state = {
    activePage: 1,
    sortValue: 'Lowest',
    status: 'progress',
    resList: [],
  }

  componentDidMount() {
    this.restaurantList()
  }

  updatedList = dataList => {
    const data = dataList.map(each => ({
      rating: each.user_rating.rating,
      name: each.name,
      imageUrl: each.image_url,
      id: each.id,
      cuisine: each.cuisine,
      review: each.user_rating.total_reviews,
    }))
    this.setState({resList: data, status: 'success'})
  }

  restaurantList = async () => {
    const {activePage, sortValue} = this.state
    const token = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const LIMIT = 9
    const offset = (activePage - 1) * LIMIT
    const url = `https://apis.ccbp.in/restaurants-list?offset=${offset}&limit=${LIMIT}&sort_by_rating=${sortValue}`

    const response = await fetch(url, options)
    const data = await response.json()
    // console.log(data)
    if (response.ok === true) {
      this.updatedList(data.restaurants)
    } else {
      this.getFailure()
    }
  }

  getList = resList => (
    <ul className="list-container">
      {resList.map(each => (
        <RestaurantList key={each.id} list={each} />
      ))}
    </ul>
  )

  loader = () => (
    <div className="products-loader-container" testid="restaurants-list-loader">
      <Loader type="Oval" color="orange" height="50" width="50" />
    </div>
  )

  failure = () => {
    const {history} = this.props
    console.log(history)
    history.replace('/not-found')
  }

  loadingStatus = () => {
    const {status, resList} = this.state
    switch (status) {
      case 'success':
        return this.getList(resList)
      case 'progress':
        return this.loader()
      case 'failure':
        return this.failure()
      default:
        return null
    }
  }

  previousButton = () => {
    const {activePage} = this.state
    if (activePage > 1) {
      this.setState(
        prevState => ({
          activePage: prevState.activePage - 1,
        }),
        this.restaurantList,
      )
    }
  }

  nextButton = () => {
    const {activePage} = this.state
    if (activePage < 4) {
      this.setState(
        prevState => ({
          activePage: prevState.activePage + 1,
        }),
        this.restaurantList,
      )
    }
  }

  render() {
    return (
      <div>
        <Header home="home" />
        <Carousel />
        <div>
          <KitchenContext.Consumer>
            {value => {
              const {sortByOptions} = value
              const {sortValue, activePage} = this.state

              const onSelect = event => {
                this.setState(
                  {sortValue: event.target.value},
                  this.restaurantList,
                )
              }
              return (
                <div>
                  <div className="popular-restaurant-top">
                    <h1 className="popular-name">Popular Restaurants</h1>
                    <div className="para-sort-cont">
                      <p className="para">
                        Select Your favourite restaurant special dish and make
                        your day happy...
                      </p>
                      <div className="sort-cont">
                        <MdSort className="sort-icon" />
                        <p>Sort By</p>
                        <select
                          value={sortValue}
                          onChange={onSelect}
                          className="select-sort"
                        >
                          {sortByOptions.map(each => (
                            <option value={each.value} key={each.id}>
                              {each.displayText}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <hr className="line" />
                  </div>
                  <div className="bottom-page-list">
                    {this.loadingStatus()}
                    <div className="page-control">
                      <button
                        type="button"
                        onClick={this.previousButton}
                        className="arrow"
                        testid="pagination-left-button"
                      >
                        <IoIosArrowBack />
                      </button>
                      <div>
                        <p testid="active-page-number" className="page-numbers">
                          {activePage}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={this.nextButton}
                        className="arrow"
                        testid="pagination-right-button"
                      >
                        <IoIosArrowForward />
                      </button>
                    </div>
                  </div>
                  <Footer />
                </div>
              )
            }}
          </KitchenContext.Consumer>
        </div>
      </div>
    )
  }
}

export default Home
