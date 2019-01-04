import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Hamburger.css'

class Hamburger extends Component {
  render() {
    return (
      <div id="hamburgerContainer">
        <button
          style={{ backgroundColor: 'rgba(0, 0, 0, 0', padding: '0.5em' }}
        >
          <FontAwesomeIcon icon="bars" color="rgb(206, 206, 206)" />
        </button>
      </div>
    )
  }
}

export default Hamburger
