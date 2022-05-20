import {ButtonLiContainer, ButtonImage, ImageItem} from './styledComponents'

const Buttons = props => {
  const {buttonDetails, onGetId} = props
  const {id, image} = buttonDetails
  const lowerCaseId = id.toLowerCase()

  const onClickButton = () => {
    onGetId(id, image)
  }

  return (
    <ButtonLiContainer>
      <ButtonImage
        type="button"
        data-testid={`${lowerCaseId}Button`}
        onClick={onClickButton}
      >
        <ImageItem src={image} alt={id} />
      </ButtonImage>
    </ButtonLiContainer>
  )
}

export default Buttons
