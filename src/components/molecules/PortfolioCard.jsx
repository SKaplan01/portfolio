import React, { Component } from 'react'
import CardButtonsMobile from '../atoms/CardButtonsMobile'
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
      theme,
    } = this.props
    return (
      <div id="card">
        {this.props.isFirst ? <h3 id="recentWork">Recent Work</h3> : null}
        {/* <div id="topRow" style={{ borderTop: `7px dotted ${theme}` }}> */}
        <div id="topRow" style={{ borderTop: `4px solid ${theme}` }}>
          <div id="topLeft">
            <h4 style={{ color: theme }}>{title}</h4>
          </div>
          <div id="topRight">
            <div>
              <CardButtonsMobile
                siteUrl={siteUrl}
                githubUrl={githubUrl}
                color={theme}
              />
            </div>
          </div>
        </div>

        <img src={imgSrc} alt={imgAlt} />
        <div id="captionRow">
          <div id="subtitle">
            <p style={{ fontSize: '1em', letterSpacing: '0.12em' }}>
              {subtitle}
            </p>
          </div>
          <div id="lastRow">
            <span className="highlightM" />

            <button
              style={{
                backgroundColor: theme,
                fontSize: '0.7em',
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
      </div>
    )
  }
}

export default PortfolioCard
