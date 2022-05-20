import {Component} from 'react'
import Header from '../Header'
import SideBar from '../SideBar'
import TrendingBody from '../TrendingBody'
import './index.css'

class Trending extends Component {
  render() {
    return (
      <>
        <ul>
          <Header />
        </ul>
        <div className="homeMainDiv">
          <SideBar />
          <div>
            <TrendingBody />
          </div>
        </div>
      </>
    )
  }
}
export default Trending
