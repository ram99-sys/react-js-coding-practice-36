import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isDarkModeOn: true}

  isDarkModeButtonClicked = () => {
    this.setState(prevState => ({isDarkModeOn: !prevState.isDarkModeOn}))
  }

  render() {
    const {isDarkModeOn} = this.state
    const displayText = isDarkModeOn ? 'Light Mode' : 'Dark Mode'
    const changeBgColor = isDarkModeOn ? 'dark-mode' : 'light-mode'
    const changeTextColor = isDarkModeOn ? 'dark-text' : 'light-text'
    return (
      <div className="app-container">
        <div className={`light-dark-mode-container ${changeBgColor}`}>
          <h1 className={`heading ${changeTextColor}`}>Click To Change Mode</h1>
          <button
            type="button"
            onClick={this.isDarkModeButtonClicked}
            className="button"
          >
            {displayText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
