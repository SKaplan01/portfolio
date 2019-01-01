import React, { Component } from 'react'
import headshot2 from '../../assets/headshot2.jpg'
import headshot3 from '../../assets/headshot3.jpg'
import sarahKaplanResume from '../../assets/sarahKaplanResume.pdf'
import ContactButtons from './ContactButtons'
import Button from '@material-ui/core/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IntroBlurb from './IntroBlurb'

class Intro extends Component {
  render() {
    return (
      <React.Fragment>
        <img src={headshot3} alt="" className="profile-pic" />
        <h1>Sarah Kaplan</h1>
        <h3>Software Engineer</h3>
        <IntroBlurb />
        <a
          href={sarahKaplanResume}
          target="_blank"
          style={{ textDecoration: 'none' }}
        >
          <Button variant="contained" color="primary">
            <FontAwesomeIcon icon="file-download" color="rgb(206, 206, 206)" />
            <span
              style={{
                paddingLeft: '.7em',
                letterSpacing: '.15em',
                color: 'rgb(206, 206, 206)',
              }}
            >
              Resume
            </span>
          </Button>
        </a>
        <ContactButtons />
      </React.Fragment>
    )
  }
}

export default Intro
