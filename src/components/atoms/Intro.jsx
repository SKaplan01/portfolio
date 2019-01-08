import React, { Component } from 'react'
import headshot2 from '../../assets/headshot2.jpg'
import headshot3 from '../../assets/headshot3.jpg'
import headshotsquare from '../../assets/headshotsquare.jpg'
import sarahKaplanResume from '../../assets/sarahKaplanResume.pdf'
import ContactButtons from './ContactButtons'
import Button from '@material-ui/core/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IntroBlurb from './IntroBlurb'

class Intro extends Component {
  render() {
    return (
      <div id="introWide">
        <h1>Sarah Kaplan</h1>
        {/* <div className="profile-pic">
          <img src={headshotsquare} alt="" />
        </div> */}
        <IntroBlurb />

        <ContactButtons />
        <h3 id="titleDesktop">React, Gatsby.js and Node/Express Developer</h3>
        <h3 id="titleMobile">Software Engineer</h3>
      </div>
    )
  }
}

export default Intro
