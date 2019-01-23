import React, { Component } from 'react'
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
        <IntroBlurb />

        <ContactButtons />
        <h3 id="titleDesktop">React, Gatsby.js and Node/Express Developer</h3>
        <h3 id="titleMobile">Software Engineer</h3>
      </div>
    )
  }
}

export default Intro
