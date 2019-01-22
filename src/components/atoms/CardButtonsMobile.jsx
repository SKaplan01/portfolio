import React, { Component } from 'react'
import './cardButtonsMobile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class CardButtonsMobile extends Component {
  constructor(props) {
    super(props)
  }
  //comment so can commit more
  render() {
    let { githubUrl, siteUrl } = this.props
    return (
      <div id="cardButtonsMobile">
        <span className="iconContainerMobile">
          <a
            href={siteUrl}
            target="_blank"
            style={{ position: 'relative', color: this.props.color }}
          >
            <span className="highlight-box" />
            <FontAwesomeIcon icon="external-link-alt" />
          </a>
        </span>
        <span className="iconContainerMobile">
          <a
            href={githubUrl}
            target="_blank"
            style={{ position: 'relative', color: this.props.color }}
          >
            <span className="highlight" />
            <FontAwesomeIcon icon={['fab', 'github']} />
          </a>
        </span>
      </div>
    )
  }
}

export default CardButtonsMobile
