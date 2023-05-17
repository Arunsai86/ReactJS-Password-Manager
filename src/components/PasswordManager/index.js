import {Component} from 'react'

import {v4} from 'uuid'

import PasswordItems from '../PasswordItems'

import './index.css'

class PasswordManager extends Component {
  state = {
    passwordsList: [],
    website: '',
    username: '',
    password: '',
    showPwd: false,
    count: 0,
    searchInput: '',
  }

  submitForm = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    // console.log(website, username, password)
    const newPasswordsList = {
      id: v4(),
      website,
      username,
      password,
    }
    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newPasswordsList],
      username: '',
      website: '',
      password: '',
      count: prevState.count + 1,
    }))
  }

  getSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getFilterPassWordsList = searchInput => {
    const {passwordsList} = this.state
    const filterData = passwordsList.filter(each =>
      each.website.includes(searchInput),
    )
    return filterData
  }

  clickDeleteBtn = id => {
    this.setState(prevState => ({
      passwordsList: prevState.passwordsList.filter(each => each.id !== id),
      count: prevState.count - 1,
    }))
  }

  clickCheckBox = () => {
    this.setState(prevState => ({showPwd: !prevState.showPwd}))
  }

  getUserWebsite = event => {
    this.setState({website: event.target.value})
  }

  getUserName = event => {
    this.setState({username: event.target.value})
  }

  getUserPassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {
      username,
      password,
      count,
      website,
      showPwd,
      searchInput,
    } = this.state
    // console.log(searchInput)

    const filterPasswordsList = this.getFilterPassWordsList(searchInput)

    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-log"
        />

        <div className="top-section">
          <form className="form-container" onSubmit={this.submitForm}>
            <h1 className="form-heading">Add New Password</h1>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="icon"
              />
              <input
                className="input"
                type="text"
                placeholder="Enter Website"
                value={website}
                onChange={this.getUserWebsite}
              />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="icon"
              />
              <input
                className="input"
                type="text"
                placeholder="Enter Username"
                value={username}
                onChange={this.getUserName}
              />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="icon"
              />
              <input
                className="input"
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={this.getUserPassword}
              />
            </div>
            <div className="add-btn-container">
              <button type="submit" className="add-btn">
                Add
              </button>
            </div>
          </form>
          <div className="img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="password-manager-image"
            />
          </div>
        </div>

        <div className="bottom-section">
          <div className="pwd-container">
            <div>
              <h1 className="password-heading">Your Passwords </h1>
              <p className="count">{count}</p>
            </div>

            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png "
                alt="search"
              />
              <input
                className="search-input"
                placeholder="Search"
                type="search"
                onChange={this.getSearchInput}
              />
            </div>
          </div>
          <hr />
          <div className="checkbox-container">
            <input
              id="myCheckbox"
              type="checkbox"
              value="true"
              onChange={this.clickCheckBox}
            />
            <label htmlFor="myCheckbox">Show Passwords</label>
          </div>
          <ul>
            {filterPasswordsList.length === 0 ? (
              <div className="no-password-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                  className="no-password-image"
                />
                <p className="no-pwd-text">No Passwords</p>
              </div>
            ) : (
              filterPasswordsList.map(eachPasswordItem => (
                <PasswordItems
                  eachPasswordItem={eachPasswordItem}
                  showPwd={showPwd}
                  key={eachPasswordItem.id}
                  clickDeleteBtn={this.clickDeleteBtn}
                />
              ))
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default PasswordManager
