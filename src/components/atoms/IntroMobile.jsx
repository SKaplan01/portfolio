import React, { Component } from 'react'
import sarahKaplanResume from '../../assets/sarahKaplanResume.pdf'
import ContactButtons from './ContactButtons'
import Button from '@material-ui/core/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IntroBlurb from './IntroBlurb'
import './IntroMobile.css'

class IntroMobile extends Component {
  render() {
    return (
      <div id="introMobile">
        <h1>Sarah Kaplan</h1>
        <h3 id="titleMobile">
          I love to build apps with React, Gatsby, and Node / Express. Check out
          my{' '}
          <span id="recentWorkMobile">
            <a href="#workLink">
              recent work{''}
              <FontAwesomeIcon
                icon="angle-double-down"
                style={{
                  color: 'rgba(30, 31, 41, 0.87)',
                  fontSize: '.87em',
                  marginLeft: '.5em',
                }}
              />{' '}
            </a>
          </span>
        </h3>
        <ContactButtons />
      </div>
    )
  }
}

export default IntroMobile
