import React, { Component } from 'react'
import Intro from './atoms/Intro'
import IntroMobile from './atoms/IntroMobile'
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
          <PortfolioContainerMobile />
        </div>
      </div>
    )
  }
}

export default Container
