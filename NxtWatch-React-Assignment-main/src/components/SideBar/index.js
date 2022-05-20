import {Link} from 'react-router-dom'
import {AiFillHome, AiFillFire, AiOutlineSave} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import './index.css'

const SideBar = () => (
  <div className="sideBarMainDiv">
    <div className="navDiv">
      <Link to="/" className="iconsDiv">
        <AiFillHome className="icons" />
        <p className="p2">Home</p>
      </Link>
      <Link to="/trending" className="iconsDiv">
        <AiFillFire className="icons" />
        <p className="p2">Trending</p>
      </Link>
      <Link to="/gaming" className="iconsDiv">
        <SiYoutubegaming className="icons" />
        <p className="p2">Gaming</p>
      </Link>
      <Link to="/saved-videos" className="iconsDiv">
        <AiOutlineSave className="icons" />
        <p className="p2">Saved Videos</p>
      </Link>
    </div>
    <div>
      <p className="h4">CONTACT US</p>
      <div className="socialMediaDiv">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
          alt="facebook logo"
          className="img7"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
          alt="twitter logo"
          className="img7"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
          alt="linked in logo"
          className="img7"
        />
      </div>
      <p className="p2">Enjoy! Now to see your channels and recommendations!</p>
    </div>
  </div>
)

export default SideBar
