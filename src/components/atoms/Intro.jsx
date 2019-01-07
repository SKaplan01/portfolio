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
        <h1>Sarah Kaplan</h1>
        <h3 id="titleDesktop">React, Gatsby.js and Node/Express Developer</h3>
        <h3 id="titleMobile">Software Engineer</h3>

        {/* <a
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
                fontSize: '0.85em',
              }}
            >
              Resume
            </span>
          </Button>
        </a> */}
        <ContactButtons />

        <IntroBlurb />
        {/* <div>
          <img src={headshot3} alt="" className="profile-pic" />
        </div> */}
        {/* <FontAwesomeIcon
          icon="angle-double-down"
          style={{ color: '#2d3a79', fontSize: '2em' }}
        /> */}
      </React.Fragment>
    )
  }
}

export default Intro
