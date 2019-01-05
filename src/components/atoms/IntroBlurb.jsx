import React, { Component } from 'react'
import './introBlurb.css'

class IntroBlurb extends Component {
  render() {
    return (
      <div className="introBlurb">
        <p>
          Check out my <a> recent work</a> <br />
          with Gatsby.js and React.
        </p>
      </div>
    )
  }
}

export default IntroBlurb
