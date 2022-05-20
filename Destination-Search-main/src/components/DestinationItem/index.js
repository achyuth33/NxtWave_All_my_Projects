import {Component} from 'react'

import './index.css'

class DestinationItem extends Component {
  render() {
    const {destinationDetails} = this.props
    const {imgUrl, name} = destinationDetails
    return (
      <li className="destination-item">
        <img src={imgUrl} alt={name} className="destination-image" />
        <p className="name">{name}</p>
      </li>
    )
  }
}

export default DestinationItem
