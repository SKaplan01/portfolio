import React, { Component } from 'react'
import './cardButtons.css'
import Button from '@material-ui/core/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class CardButtons extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { githubUrl, siteUrl } = this.props
    return (
      <div id="cardButtons">
        <span id="iconContainer">
          <a href={siteUrl} target="_blank">
            <FontAwesomeIcon icon="external-link-alt" />
          </a>

          <a href={githubUrl} target="_blank">
            <FontAwesomeIcon icon={['fab', 'github']} />
          </a>
        </span>

        <Button
          variant="contained"
          color="primary"
          style={{ marginBottom: '0.7em' }}
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
    )
  }
}

export default CardButtons
