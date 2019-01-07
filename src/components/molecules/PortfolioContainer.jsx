import React, { Component } from 'react'
import PortfolioCardWide from './PortfolioCardWide'
import lsVoteGif from '../../assets/lsVoteGif.gif'
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
            theme="#3857e2"
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
            imgSrc={lsVoteGif}
            theme="#a3075d"
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

// Old style CardActions
// <PortfolioCard
//             imgSrc={jobly}
//             imgAlt="Jobly site"
//             title="Jobly"
//             subtitle="React, Node/Express, PostgreSQL"
//             caption="Jobly is an app where users can view job postings and apply for open positions"
//             githubUrl="https://github.com/SKaplan01/react_jobly"
//             siteUrl="https://jobilly.herokuapp.com/"
//           />
//           <PortfolioCard
//             imgSrc={lsVoteGif}
//             imgAlt="Product page for lipslut.com"
//             title="Faneron"
//             subtitle="React, Gatsby.js, GraphQL, JAMstack"
//             caption="Lipslut.com is an e-commerce site selling makeup to benefit progressive causes."
//             githubUrl="https://github.com/SKaplan01/lipslut2.0"
//             siteUrl="https://www.lipslut.com/"
//           />

//           <PortfolioCard
//             imgSrc={lsVoteGif}
//             imgAlt="Product page for lipslut.com"
//             title="Microblog"
//             subtitle="React, Redux"
//             caption="Lipslut.com is an e-commerce site selling makeup to benefit progressive causes."
//             githubUrl="https://github.com/SKaplan01/microblog"
//             siteUrl="https://www.lipslut.com/"
//           />
