import {Link} from 'react-router-dom'
import './index.css'

const GamingItem = props => {
  const {each} = props
  const {id, title, thumbnailUrl, viewCount} = each
  return (
    <Link to={`/videos/${id}`} className="link-item">
      <li className="cardDiv2">
        <img src={thumbnailUrl} className="img14" alt="video thumbnail" />
        <p className="p3">{title}</p>
        <p className="p4">{viewCount}</p>
      </li>
    </Link>
  )
}
export default GamingItem
