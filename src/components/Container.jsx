import React, { Component } from 'react'
import Intro from './atoms/Intro'
import './container.css'
import PortfolioContainer from './molecules/PortfolioContainer'
import PortfolioContainerMobile from './molecules/PortfolioContainerMobile'

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
        <div className="right desktop">
          <PortfolioContainer />
        </div>
        <div className="right mobile">
          <PortfolioContainerMobile />
        </div>
      </div>
    )
  }
}

export default Container
