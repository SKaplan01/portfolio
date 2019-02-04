import React, { Component } from 'react'
import Intro from './atoms/Intro'
import AboutMe from './molecules/AboutMe'
import { Link } from 'gatsby'
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
          <div className="navContainer-right navWide">
            <Link to="/">
              <span>Home</span>
            </Link>
            <Link to="/about">
              <span>About</span>
            </Link>

            <Link to="/contact">
              <span>Contact</span>
            </Link>
          </div>
          <AboutMe />
        </div>
      </div>
    )
  }
}

export default ContainerAbout
