import React, { Component } from 'react'
import Intro from './atoms/Intro'
import IntroMobile from './atoms/IntroMobile'
import { Link } from 'gatsby'
import './container.css'
import PortfolioContainerMobile from './molecules/PortfolioContainerMobile'

class Container extends Component {
  render() {
    return (
      <div className="container">
        <div className="left">
          <div className="overlay">
            <div className="main-content">
              <Intro />
              <IntroMobile />
            </div>
          </div>
        </div>
        <a id="workLink" />
        <div className="right mobile">
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
          <PortfolioContainerMobile />
        </div>
      </div>
    )
  }
}

export default Container
