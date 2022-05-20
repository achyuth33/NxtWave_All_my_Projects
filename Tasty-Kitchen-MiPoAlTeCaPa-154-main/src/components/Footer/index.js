import {
  FaFacebookSquare,
  FaTwitter,
  FaPinterestSquare,
  FaInstagram,
} from 'react-icons/fa'
import './index.css'

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-logo">
        <img
          src="https://res.cloudinary.com/dydlvwdqp/image/upload/v1634124547/Group_7420_gpgewg.jpg"
          alt="website-footer-logo"
          className="logi"
        />

        <h1 className="kitchen-name">Tasty Kitchen </h1>
      </div>
      <p className="footer-para">
        The only thing we are serious about is food. Contact us on
      </p>
      <div className="font-container">
        <FaPinterestSquare
          className="pinterest"
          testid="pintrest-social-icon"
        />
        <FaInstagram className="insta" testid="instagram-social-icon" />
        <FaTwitter className="twitter" testid="twitter-social-icon" />
        <FaFacebookSquare className="facebook" testid="facebook-social-icon" />
      </div>
    </div>
  )
}
