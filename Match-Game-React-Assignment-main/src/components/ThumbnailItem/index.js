import './index.css'

const ThumbnailItem = props => {
  const {thumbnail, onClickThumbnail} = props
  const {id, thumbnailUrl} = thumbnail

  const onClickThumbnailItem = () => {
    onClickThumbnail(id)
  }

  return (
    <li className="thumbnail-container">
      <button
        className="thumbnail-button"
        type="button"
        onClick={onClickThumbnailItem}
      >
        <img className="thumbnail-image" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default ThumbnailItem
