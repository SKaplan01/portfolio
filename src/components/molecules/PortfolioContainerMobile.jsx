import React, { Component } from 'react'
import PortfolioCardMobile from './PortfolioCardMobile'
import lsVoteGif from '../../assets/lsVoteGif.gif'
import joblyMobile3 from '../../assets/joblyMobile3.png'
import jobly from '../../assets/jobly.gif'
import './portfolioContainer.css'

class PortfolioContainerMobile extends Component {
  render() {
    return (
      <div id="portfolioContainer">
        <div id="cardContainer">
          <PortfolioCardMobile
            imgSrc={joblyMobile3}
            theme="#3857e2"
            imgAlt="Jobly site"
            title="Jobly"
            subtitle="React, Node/Express"
            caption="Jobly is a mock app where users can view and apply for open jobs."
            githubUrl="https://github.com/SKaplan01/react_jobly"
            siteUrl="https://jobilly.herokuapp.com/"
          />
          <PortfolioCardMobile
            imgSrc={lsVoteGif}
            theme="#a3075d"
            imgAlt="Product page for lipslut.com"
            title="Faneron"
            subtitle="React, Gatsby.js, GraphQL"
            caption="Lipslut.com sells makeup to benefit progressive causes."
            githubUrl="https://github.com/SKaplan01/lipslut2.0"
            siteUrl="https://www.lipslut.com/"
          />
        </div>
      </div>
    )
  }
}

export default PortfolioContainerMobile

//theme="#364174" (previous jobly theme)
