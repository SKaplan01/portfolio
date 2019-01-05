import React, { Component } from 'react'
import CardButtonsMobile from '../atoms/CardButtonsMobile'
import './portfolioCardTablet.css'

class PortfolioCardTablet extends Component {
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
      theme,
    } = this.props
    return (
      <div id="cardTablet">
        <div id="topRowTablet" style={{ borderTop: `7px dotted ${theme}` }}>
          <div id="topLeftTablet">
            <h4 style={{ color: theme }}>{title}</h4>
          </div>
          <div id="topRightTablet">
            <button
              style={{
                backgroundColor: theme,
              }}
            >
              <span
                style={{
                  letterSpacing: '.15em',
                  color: 'rgb(240,240,240)',
                  fontSize: '0.8em',
                  textTransform: 'uppercase',
                }}
              >
                Details
              </span>
            </button>
          </div>
        </div>
        <div id="bottomRowTablet">
          <div id="cardLeftTablet">
            <img src={imgSrc} alt={imgAlt} />
          </div>
          <div id="cardRightTablet">
            <p>{caption}</p>
          </div>
        </div>
        <div id="thirdRowTablet">
          <div id="thirdLeft">
            <i>{subtitle}</i>
          </div>
          <div id="thirdRightTablet">
            <CardButtonsMobile
              siteUrl={siteUrl}
              githubUrl={githubUrl}
              color={theme}
            />
          </div>
        </div>

        {/* <CardButtons siteUrl={siteUrl} githubUrl={githubUrl} /> */}
      </div>
    )
  }
}

export default PortfolioCardTablet
