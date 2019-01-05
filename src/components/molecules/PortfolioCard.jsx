import React, { Component } from 'react'
import CardButtons from '../atoms/CardButtons'
import './portfolioCard.css'

class PortfolioCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let {
      imgSrc,
      imgAlt,
      title,
      subtitle,
      caption,
      githubUrl,
      siteUrl,
    } = this.props
    return (
      <div id="cardOverlay">
        <div id="card">
          <h4>{title}</h4>
          <i>{subtitle}</i>
          <img src={imgSrc} alt={imgAlt} />
          <p>{caption}</p>
          <CardButtons siteUrl={siteUrl} githubUrl={githubUrl} />
        </div>
      </div>
    )
  }
}

export default PortfolioCard
