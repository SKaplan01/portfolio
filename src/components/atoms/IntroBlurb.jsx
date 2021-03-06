import React, { Component } from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './introBlurb.css'

class IntroBlurb extends Component {
  render() {
    return (
      <div className="introBlurb">
        <p id="desktopBlurb">
          <Link to="/page-2">skaplandev@gmail</Link>
          <br />
        </p>
        <p id="mobileBlurb">
          <a href="#workLink">
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
