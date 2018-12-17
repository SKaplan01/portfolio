import React, { Component } from 'react'
import './contactButtons.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ContactButtons extends Component {
  render() {
    return (
      <div id="contactButtons" style={{ color: '#3649a5' }}>
        <span>
          <FontAwesomeIcon icon="envelope" />
        </span>
        <span>
          <FontAwesomeIcon icon={['fab', 'github']} />
        </span>
        <span>
          <FontAwesomeIcon icon={['fab', 'linkedin']} />
        </span>
      </div>
    )
  }
}

export default ContactButtons

// #3f52b5
