import {Component} from 'react'
import Header from '../Header'
import SideBar from '../SideBar'
import VideoItemBody from '../VideoItemBody'
import './index.css'

class Trending extends Component {
  render() {
    const {match} = this.props
    const {params} = match
    const {id} = params
    return (
      <>
        <ul>
          <Header />
        </ul>
        <div className="homeMainDiv">
          <SideBar />
          <div className="videoItem">
            <VideoItemBody id={id} />
          </div>
        </div>
      </>
    )
  }
}
export default Trending
