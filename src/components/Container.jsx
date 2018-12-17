import React, { Component } from 'react'
import Intro from './atoms/Intro'
import './container.css'

class Container extends Component {
  render() {
    return (
      <div className="container">
        <div className="left">
          <div className="overlay">
            <div className="main-content">
              <Intro />
            </div>
          </div>
        </div>
        <div className="right">
          <h1>I am the right container</h1>
          <p>I say some stuff too. It's cool.</p>
        </div>
      </div>
    )
  }
}

export default Container
