import {Component} from 'react'
import {SiYoutubegaming} from 'react-icons/si'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import GamingItem from '../GamingItem'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class GamingBody extends Component {
  state = {videos: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.makingApiCall()
  }

  renderLoadingView = () => (
    <div className="products-loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  makingApiCall = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = `https://apis.ccbp.in/videos/gaming`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    console.log(response)
    if (response.ok === true) {
      const fetchedData = await response.json()
      console.log(fetchedData)
      const updatedData = fetchedData.videos.map(product => ({
        title: product.title,
        thumbnailUrl: product.thumbnail_url,
        id: product.id,
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

  renderVideos = () => {
    const {videos} = this.state
    if (videos.length !== 0) {
      return (
        <ul className="videosDiv">
          {videos.map(each => (
            <GamingItem each={each} key={each.id} />
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
      <div className="homeDiv1">
        <div className="searchDiv1">
          <SiYoutubegaming className="icons1" />
          <h1>Gaming</h1>
        </div>
        {this.functionRendering()}
      </div>
    )
  }
}
export default GamingBody
