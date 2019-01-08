import React, { Component } from 'react'
import PortfolioCardWide from './PortfolioCardWide'
import lsVoteGif from '../../assets/lsVoteGif.gif'
import lipslutGif from '../../assets/lipslutGif.gif'
import jobly from '../../assets/jobly.png'
import joblyMobile3 from '../../assets/joblyMobile3.png'
import './portfolioContainer.css'
import { CardActions } from '@material-ui/core'

class PortfolioContainer extends Component {
  render() {
    return (
      <div id="portfolioContainer">
        <div id="cardContainer">
          <PortfolioCardWide
            isFirst={true}
            imgSrc={jobly}
            theme="#3846c7"
            imgAlt="Jobly site"
            title="Jobly"
            subtitle="React, Node/Express, PostgreSQL"
            caption="Jobly is a mock app where users can view job postings 
            and apply for open positions. Users can sort jobs by company 
            or filter the job postings via a keyword search."
            githubUrl="https://github.com/SKaplan01/react_jobly"
            siteUrl="https://jobilly.herokuapp.com/"
          />
          <PortfolioCardWide
            isFirst={false}
            imgSrc={lipslutGif}
            theme="#EC208D"
            imgAlt="Product page for lipslut.com"
            title="Faneron"
            subtitle="React, Gatsby.js, GraphQL"
            caption="Lipslut.com sells makeup to benefit progressive causes.
            Upon making a purchase, users can vote for an organization to support."
            githubUrl="https://github.com/SKaplan01/lipslut2.0"
            siteUrl="https://www.lipslut.com/"
          />
        </div>
      </div>
    )
  }
}

export default PortfolioContainer

//themes for old layout with sunset backgeound
//jobly
//theme="#3857e2"
//lipslut
//#a3075d
