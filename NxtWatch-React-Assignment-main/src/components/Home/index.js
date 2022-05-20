import {Component} from 'react'
import HomeBody from '../HomeBody'

import Header from '../Header'
import SideBar from '../SideBar'
import Banner from '../Banner'
import './index.css'

class Home extends Component {
  state = {isBanner: true}

  findJobButton = () => {
    const {history} = this.props
    return history.replace('/jobs')
  }

  bannerClicks = () => {
    this.setState({isBanner: false})
  }

  render() {
    const {isBanner} = this.state

    return (
      <>
        <ul>
          <Header />
        </ul>
        <div className="homeMainDiv">
          <SideBar />
          <div>
            {isBanner ? (
              <Banner className="banDiv" bannerClicks={this.bannerClicks} />
            ) : null}
            <HomeBody />
          </div>
        </div>
      </>
    )
  }
}
export default Home
