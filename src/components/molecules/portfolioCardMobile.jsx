import React, { Component } from 'react'
import CardButtonsMobile from '../atoms/CardButtonsMobile'
import './portfolioCardMobile.css'

class PortfolioCardMobile extends Component {
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
      <div id="cardMobile">
        <div id="topRow" style={{ borderTop: `7px dotted ${theme}` }}>
          <div id="topLeft">
            <h4 style={{ color: theme }}>{title}</h4>
          </div>
          <div id="topRight">
            <span className="highlightM" />
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
        <div id="bottomRow">
          <div id="cardLeft">
            <img src={imgSrc} alt={imgAlt} />
          </div>
          <div id="cardRight">
            <p>{caption}</p>
          </div>
        </div>
        <div id="thirdRow">
          <div id="thirdLeft">
            <i>{subtitle}</i>
          </div>
          <div id="thirdRight">
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

export default PortfolioCardMobile
