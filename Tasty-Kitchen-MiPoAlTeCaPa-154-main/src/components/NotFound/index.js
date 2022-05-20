import {Link} from 'react-router-dom'
import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <img
      src="https://res.cloudinary.com/dydlvwdqp/image/upload/v1634290551/erroring_1_hbg1pu.jpg"
      alt="not found"
    />
    <h1 className="not-found-name">Page Not Found</h1>
    <p className="not-suggest">
      we are sorry, the page you requested could not be found
    </p>
    <Link to="/">
      <button type="button" className="not-home-btn">
        Home Page
      </button>
    </Link>
  </div>
)

export default NotFound
