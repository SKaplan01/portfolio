import React, { Component } from 'react'
import CardButtonsMobile from '../atoms/CardButtonsMobile'
import './portfolioCardWide.css'

class PortfolioCardWide extends Component {
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
        {this.props.isFirst ? <h3 id="recentWork">Recent Work</h3> : null}

        {/* <div id="topRowTablet" style={{ borderTop: `7px dotted ${theme}` }}> */}
        <div id="topRowTablet" style={{ borderTop: `4px solid ${theme}` }}>
          <div id="topLeftTablet">
            <h4 style={{ color: theme }}>{title}</h4>
          </div>
          <div id="topRightTablet">
            <div>
              <CardButtonsMobile
                siteUrl={siteUrl}
                githubUrl={githubUrl}
                color={theme}
              />
            </div>
            <div>
              <span className="highlightM" />
              <button
                style={{
                  backgroundColor: theme,
                  marginLeft: '1em',
                  height: '1.6em',
                }}
              >
                <span
                  style={{
                    letterSpacing: '.1em',
                    color: 'rgb(240,240,240)',
                    fontSize: '0.7em',
                    textTransform: 'uppercase',
                  }}
                >
                  Details
                </span>
              </button>
            </div>
          </div>
        </div>
        <div id="thirdRowTablet">
          <div id="thirdLeftTablet">
            <p>{subtitle}</p>
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
      </div>
    )
  }
}

export default PortfolioCardWide
