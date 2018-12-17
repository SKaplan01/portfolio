import React, { Component } from 'react'
import './contactButtons.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'gatsby'

class ContactButtons extends Component {
  render() {
    const linkStyle = {
      textDecoration: 'none',
      textDecorationStyle: 'none',
      textDecorationLine: 'none',
      color: 'rgb(206, 206, 206)',
    }
    return (
      <div id="contactButtons">
        <span>
          <Link to="/page-2" style={linkStyle}>
            <FontAwesomeIcon icon="envelope" />
          </Link>
        </span>
        <span>
          <a
            href="https://github.com/skaplan01/"
            target="_blank"
            style={{ color: 'rgb(206, 206, 206)', textDecoration: 'none' }}
          >
            <FontAwesomeIcon icon={['fab', 'github']} />
          </a>
        </span>
        <span>
          <a
            href="https://www.linkedin.com/in/sarah-kaplan-dev/"
            target="_blank"
            style={{ color: 'rgb(206, 206, 206)', textDecoration: 'none' }}
          >
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
          </a>
        </span>
      </div>
    )
  }
}

export default ContactButtons

//other icon color options
// #3f52b5
//#3649a5
//#A99FA1
