import React, { Component } from 'react'
import './cardButtonsMobile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class CardButtonsMobile extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { githubUrl, siteUrl } = this.props
    return (
      <div id="cardButtonsMobile">
        <span id="iconContainerMobile">
          <a href={siteUrl} target="_blank" style={{ color: this.props.color }}>
            <FontAwesomeIcon icon="external-link-alt" />
          </a>

          <a
            href={githubUrl}
            target="_blank"
            style={{ color: this.props.color }}
          >
            <FontAwesomeIcon icon={['fab', 'github']} />
          </a>
        </span>
      </div>
    )
  }
}

export default CardButtonsMobile
