import {Component} from 'react'
import Header from '../Header'
import SideBar from '../SideBar'
import GamingBody from '../GamingBody'
import './index.css'

class Gaming extends Component {
  render() {
    return (
      <>
        <ul>
          <Header />
        </ul>
        <div className="homeMainDiv">
          <SideBar />
          <div>
            <GamingBody />
          </div>
        </div>
      </>
    )
  }
}
export default Gaming
