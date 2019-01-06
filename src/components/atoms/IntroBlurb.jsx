import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './introBlurb.css'

class IntroBlurb extends Component {
  render() {
    return (
      <div className="introBlurb">
        <p id="desktopBlurb">
          <a>
            {' '}
            recent work
            <br />
            <FontAwesomeIcon
              icon="angle-double-right"
              style={{
                color: '#2d3a79',
                fontSize: '.87em',
                marginLeft: '.5em',
              }}
            />
          </a>
          {/* Check out my <a> recent work</a> <br />
          with Gatsby.js and React. */}
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
