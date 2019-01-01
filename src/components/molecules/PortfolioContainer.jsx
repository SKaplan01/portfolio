import React, { Component } from 'react'
import PortfolioCard from './PortfolioCard'
import lsVoteGif from '../../assets/lsVoteGif.gif'
import './portfolioContainer.css'

class PortfolioContainer extends Component {
  render() {
    return (
      <div id="portfolioContainer">
        <h1>Recent Work</h1>
        <PortfolioCard
          imgSrc={lsVoteGif}
          imgAlt="Product page for lipslut.com"
          title="Faneron"
          subtitle="React, Gatsby.js, GraphQL, JAMstack"
          caption="Lipslut.com is an e-commerce site selling makeup to benefit progressive causes."
          githubUrl="https://github.com/SKaplan01/lipslut2.0"
          siteUrl="https://www.lipslut.com/"
        />
      </div>
    )
  }
}

export default PortfolioContainer
