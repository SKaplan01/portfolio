import React, { Component } from 'react'
import headshot2 from '../../assets/headshot2.jpg'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IntroBlurb from './IntroBlurb'

class Intro extends Component {
  render() {
    return (
      <React.Fragment>
        <img src={headshot2} alt="" className="profile-pic" />
        <h1>Sarah Kaplan</h1>
        <h3>Software Engineer</h3>
        <IntroBlurb />
        <Button variant="contained" color="primary">
          <FontAwesomeIcon icon="file-download" />
          <span style={{ paddingLeft: '.7em', letterSpacing: '.15em' }}>
            Resume
          </span>
        </Button>
      </React.Fragment>
    )
  }
}

export default Intro
