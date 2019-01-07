import React, { Component } from 'react'
import Intro from './atoms/Intro'
import './container.css'

class ContainerContact extends Component {
  render() {
    return (
      <div className="container">
        <div className="left contact">
          <div className="overlay">
            <div className="main-content">
              <Intro />
            </div>
          </div>
          <a id="workLink" />
        </div>
        <div className="right" />
      </div>
    )
  }
}

export default ContainerContact