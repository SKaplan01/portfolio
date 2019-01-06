import React, { Component } from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './introBlurb.css'

class IntroBlurb extends Component {
  render() {
    return (
      <div className="introBlurb">
        <p id="desktopBlurb">
          I'm a React, Gatsby.js and Node/Express developer.
          <br />
          Connect with me:
          <Link to="/page-2">
            <div>skaplandev@gmail</div>
          </Link>
        </p>
        <p id="mobileBlurb">
          <a>
            {' '}
            recent work
            <FontAwesomeIcon
              icon="angle-double-down"
              style={{
                color: '#2d3a79',
                fontSize: '.87em',
                marginLeft: '.5em',
              }}
            />
          </a>
        </p>
      </div>
    )
  }
}

export default IntroBlurb
