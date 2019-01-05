import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
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
    } = this.props
    return (
      <div id="cardMobile">
        <div id="topRow">
          <div id="topLeft">
            <h4>{title}</h4>
          </div>
          <div id="topRight">
            <Button
              variant="contained"
              color="primary"
              style={{
                marginBottom: '0em',
                backgroundColor: '#475697',
                padding: '0px',
                paddingLeft: '7px',
                paddingRight: '7px',
                marginRight: '.8em',
              }}
            >
              <span
                style={{
                  letterSpacing: '.15em',
                  color: 'rgb(240,240,240)',
                  fontSize: '0.8em',
                }}
              >
                Details
              </span>
            </Button>
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
            <CardButtonsMobile color="#475697" />
          </div>
        </div>

        {/* <CardButtons siteUrl={siteUrl} githubUrl={githubUrl} /> */}
      </div>
    )
  }
}

export default PortfolioCardMobile
