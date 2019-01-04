import React, { Component } from 'react'
import PortfolioCard from './PortfolioCard'
import lsVoteGif from '../../assets/lsVoteGif.gif'
import jobly from '../../assets/jobly.png'
import './portfolioContainer.css'

class PortfolioContainer extends Component {
  render() {
    return (
      <div id="portfolioContainer">
        {/* <h3>Recent Work</h3> */}
        <div id="cardContainer">
          <PortfolioCard
            imgSrc={lsVoteGif}
            imgAlt="Product page for lipslut.com"
            title="Faneron"
            subtitle="React, Gatsby.js, GraphQL, JAMstack"
            caption="Lipslut.com is an e-commerce site selling makeup to benefit progressive causes."
            githubUrl="https://github.com/SKaplan01/lipslut2.0"
            siteUrl="https://www.lipslut.com/"
          />
          <PortfolioCard
            imgSrc={jobly}
            imgAlt="Jobly site"
            title="Jobly"
            subtitle="React, Node/Express, PostgreSQL"
            caption="Jobly is an app where users can view job postings and apply for open positions"
            githubUrl="https://github.com/SKaplan01/react_jobly"
            siteUrl="https://jobilly.herokuapp.com/"
          />
          <PortfolioCard
            imgSrc={lsVoteGif}
            imgAlt="Product page for lipslut.com"
            title="Microblog"
            subtitle="React, Redux"
            caption="Lipslut.com is an e-commerce site selling makeup to benefit progressive causes."
            githubUrl="https://github.com/SKaplan01/microblog"
            siteUrl="https://www.lipslut.com/"
          />
        </div>
      </div>
    )
  }
}

export default PortfolioContainer
