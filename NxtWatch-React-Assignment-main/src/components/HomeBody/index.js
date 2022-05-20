import {Component} from 'react'
import {BiSearch} from 'react-icons/bi'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {HomeMainDiv} from './styledComponents'
import VideoItem from '../VideoItem'
import YoutubeContext from '../../Context/YoutubeContext'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class HomeBody extends Component {
  state = {videos: [], apiStatus: apiStatusConstants.initial, searchInput: ''}

  componentDidMount() {
    this.makingApiCall()
  }

  renderLoadingView = () => (
    <div className="products-loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  makingApiCall = async () => {
    const {searchInput} = this.state
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.videos.map(product => ({
        title: product.title,
        publishedAt: product.published_at,
        thumbnailUrl: product.thumbnail_url,
        id: product.id,
        name: product.channel.name,
        profileImageUrl: product.channel.profile_image_url,
        viewCount: product.view_count,
      }))
      this.setState({
        videos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  clickingRetry = () => this.makingApiCall()

  inputChange = event => {
    this.setState({searchInput: event.target.value})
  }

  renderVideosFailureView = () => (
    <div className="videosDiv1">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
        className="img10"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>We are having some trouble</p>
      <button type="button" className="button6" onClick={this.clickingRetry}>
        Retry
      </button>
    </div>
  )

  renderVideos = () => {
    const {videos} = this.state
    if (videos.length !== 0) {
      return (
        <ul className="videosDiv">
          {videos.map(each => (
            <VideoItem each={each} key={each.id} />
          ))}
        </ul>
      )
    }
    return (
      <div className="videosDiv1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          alt="no videos"
          className="img10"
        />
        <h1>No Search results found</h1>
        <p>Try different key words or remove search filter</p>
        <button type="button" className="button6" onClick={this.clickingRetry}>
          Retry
        </button>
      </div>
    )
  }

  functionRendering = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideos()
      case apiStatusConstants.failure:
        return this.renderVideosFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  clickingInput = () => {
    this.makingApiCall()
  }

  render() {
    return (
      <YoutubeContext.Consumer>
        {value => {
          const {isTheme} = value
          const bgColor = isTheme ? '#181818' : '#ffffff'
          const color = isTheme ? '#ffffff' : null
          const {searchInput} = this.state
          return (
            <HomeMainDiv bgColor={bgColor} color={color}>
              <div className="searchDiv">
                <input
                  type="search"
                  className="input4"
                  onChange={this.inputChange}
                  value={searchInput}
                />
                <button
                  type="button"
                  data-testid="searchButton"
                  className="icon"
                  onClick={this.clickingInput}
                >
                  <BiSearch />
                </button>
              </div>
              {this.functionRendering()}
            </HomeMainDiv>
          )
        }}
      </YoutubeContext.Consumer>
    )
  }
}
export default HomeBody
