import './index.css'

const PasswordItems = props => {
  const {eachPasswordItem, clickDeleteBtn, showPwd} = props
  const {id, username, website, password} = eachPasswordItem

  const deletePasswordDetails = () => {
    clickDeleteBtn(id)
  }

  const starsImgSrc = (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="star-image"
    />
  )

  return (
    <li>
      <div className="pwd-profile-container">
        <h1>{username[0]}</h1>
      </div>
      <div className="user-password-details-container">
        <p>{website}</p>
        <p>{username}</p>
        {showPwd ? <p>{password}</p> : starsImgSrc}
      </div>
      <button
        type="button"
        className="delete-btn"
        onClick={deletePasswordDetails}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default PasswordItems
