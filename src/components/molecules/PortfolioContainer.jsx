import React, { Component } from 'react'
import PortfolioCard from './PortfolioCard'
import PortfolioCardTablet from './PortfolioCardTablet'
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
          <PortfolioCardTablet
            imgSrc={joblyMobile3}
            theme="#3857e2"
            imgAlt="Jobly site"
            title="Jobly"
            subtitle="React, Node/Express, PostgreSQL"
            caption="Jobly is an app where users can view job postings and apply for open positions."
            githubUrl="https://github.com/SKaplan01/react_jobly"
            siteUrl="https://jobilly.herokuapp.com/"
          />
          <PortfolioCardTablet
            imgSrc={lsVoteGif}
            theme="#a3075d"
            imgAlt="Product page for lipslut.com"
            title="Faneron"
            subtitle="React, Gatsby.js, GraphQL, JAMstack"
            caption="Lipslut.com sells makeup to benefit progressive causes."
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
