// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, imageClassNames, isActive} = props
  const {imageUrl, thumbnailUrl, imageAltText, thumbnailAltText} = imageDetails

  const onClickThumbnail = () => {
    imageClassNames(imageUrl, imageAltText)
  }

  const buttonClassName = isActive ? 'blur-button' : ''

  const handleClick = () => {
    const button = document.getElementById('mybutton')
    button.classList.remove('blur-button')
    onClickThumbnail()
  }

  return (
    <li className="backgroundImage-cards">
      <button
        id="mybutton"
        className={`button ${buttonClassName}`}
        type="button"
        onClick={handleClick}
      >
        {' '}
        <img src={thumbnailUrl} alt={thumbnailAltText} className="image" />{' '}
      </button>
    </li>
  )
}

export default ThumbnailItem
