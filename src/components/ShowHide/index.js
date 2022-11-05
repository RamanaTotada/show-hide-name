import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isHide: false, isHides: false}

  onFirstName = () => {
    this.setState(prevState => ({isHide: !prevState.isHide}))
  }

  onLastName = () => {
    this.setState(prevState => ({isHides: !prevState.isHides}))
  }

  render() {
    const {isHide} = this.state
    let autoButton

    if (isHide === true) {
      autoButton = <p className="name-container">Joe</p>
    }

    const {isHides} = this.state
    let autoButtonLastName
    if (isHides === true) {
      autoButtonLastName = <p className="name-container">Jonas</p>
    }

    return (
      <div className="background-container">
        <div className="inner-container">
          <h1 className="heading">Show/Hide</h1>
          <div className="button-container">
            <div className="first-name">
              <button
                type="button"
                className="button-style"
                onClick={this.onFirstName}
              >
                {' '}
                Show/Hide Firstname
              </button>
              {autoButton}
            </div>

            <div className="first-name">
              <button
                type="button"
                className="button-style"
                onClick={this.onLastName}
              >
                {' '}
                Show/Hide LastName
              </button>
              {autoButtonLastName}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
