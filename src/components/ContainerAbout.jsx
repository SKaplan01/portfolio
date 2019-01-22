import React, { Component } from 'react'
import Intro from './atoms/Intro'
import AboutMe from './molecules/AboutMe'
import './container.css'

class ContainerAbout extends Component {
  render() {
    return (
      <div className="container">
        <div className="left about">
          <div className="overlay">
            <div className="main-content">
              <Intro />
            </div>
          </div>
          <a id="workLink" />
        </div>
        <div className="right">
          <AboutMe />
        </div>
      </div>
    )
  }
}

export default ContainerAbout
