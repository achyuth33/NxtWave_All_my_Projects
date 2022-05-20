import Slider from 'react-slick'
import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import './index.css'

class Carousel extends Component {
  state = {imagesList: [], status: 'progress'}

  componentDidMount() {
    this.getCarousel()
  }

  getCarousel = async () => {
    const token = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const url = 'https://apis.ccbp.in/restaurants-list/offers'
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    this.setState({imagesList: data.offers, status: 'success'})
  }

  getList = () => {
    const {imagesList} = this.state
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 4000,
      cssEase: 'linear',
    }

    return (
      <Slider {...settings} className="carousel-container">
        {imagesList.map(each => (
          <div className="carousel" key={each.id}>
            <img
              src={each.image_url}
              alt="offer"
              className="carousel-img"
              key={each.id}
            />
          </div>
        ))}
      </Slider>
    )
  }

  loader = () => (
    <div
      className="products-loader-container"
      testid="restaurants-offers-loader"
    >
      <Loader type="Oval" color="orange" height="50" width="50" />
    </div>
  )

  loadingStatus = () => {
    const {status} = this.state
    switch (status) {
      case 'success':
        return this.getList()
      case 'progress':
        return this.loader()
      case 'failure':
        return this.failure()
      default:
        return null
    }
  }

  render() {
    return <div className="container">{this.loadingStatus()}</div>
  }
}

export default Carousel
