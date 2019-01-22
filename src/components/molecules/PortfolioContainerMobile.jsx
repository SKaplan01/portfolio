import React, { Component } from 'react'
import PortfolioCard from './PortfolioCard'
import lsVoteGif from '../../assets/lsVoteGif.gif'
import lipslutGif from '../../assets/lipslutGif.gif'
import joblyMobile3 from '../../assets/joblyMobile3.png'
import jobly from '../../assets/jobly.gif'
import memoryGame2 from '../../assets/memoryGame2.gif'
import './portfolioContainer.css'

class PortfolioContainerMobile extends Component {
  render() {
    return (
      <div id="portfolioContainer">
        <div id="cardContainer">
          <PortfolioCard
            isFirst={true}
            imgSrc={joblyMobile3}
            theme="#3846c7"
            imgAlt="Jobly site"
            title="Jobly"
            subtitle="React, Node/Express, PostgreSQL"
            caption="Jobly is a mock app where users can view job postings 
            and apply for open positions. Users can filter the job postings 
            by company or via a keyword search."
            githubUrl="https://github.com/SKaplan01/react_jobly"
            siteUrl="https://jobilly.herokuapp.com/"
          />
          <PortfolioCard
            isFirst={false}
            imgSrc={lipslutGif}
            theme="#EC208D"
            imgAlt="Product page for lipslut.com"
            title="Faneron"
            subtitle="React, Gatsby.js, GraphQL"
            caption="Lipslut.com sells makeup to benefit progressive causes.
            With every purchase, the user can vote for an organization to 
            support."
            githubUrl="https://github.com/SKaplan01/lipslut2.0"
            siteUrl="https://www.lipslut.com/"
          />
          <PortfolioCard
            isFirst={false}
            imgSrc={memoryGame2}
            theme="#39991d"
            imgAlt="Memory game gif"
            title="Memory Game"
            subtitle="Vanilla Javascript, HTML, and CSS"
            caption="A memory card game for Parks and Rec fans. 
            Click a card to reveal your favorite member of the Pawnee
            Parks Department."
            githubUrl="https://github.com/SKaplan01/memory-game"
            siteUrl="https://skaplan01.github.io/memory-game/"
          />
        </div>
      </div>
    )
  }
}

export default PortfolioContainerMobile

//theme="#364174" (previous jobly theme)
//theme="#a3075d" (previous lipslut theme)
