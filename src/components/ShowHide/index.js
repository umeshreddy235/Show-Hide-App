// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {isFirst: false, isLast: false}

  onClickFirst = () => {
    this.setState(PrevState => ({isFirst: !PrevState.isFirst}))
  }

  onClickLast = () => {
    this.setState(PrevState => ({isLast: !PrevState.isLast}))
  }

  render() {
    const {isFirst, isLast} = this.state
    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div className="show-hide-container">
          <div className="name-container">
            <button
              className="button1"
              type="button"
              onClick={this.onClickFirst}
            >
              Show/Hide Firstname
              {isFirst && <p className="name">Joe</p>}
            </button>
          </div>
          <div className="name-container">
            <button
              className="button2"
              type="button"
              onClick={this.onClickLast}
            >
              Show/Hide Lastname
            </button>
            {isLast && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
