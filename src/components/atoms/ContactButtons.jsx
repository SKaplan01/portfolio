import React, { Component } from 'react'
import './contactButtons.css'
import sarahKaplanResume from '../../assets/sarahKaplanResume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'gatsby'

class ContactButtons extends Component {
  render() {
    const linkStyle = {
      textDecoration: 'none',
      textDecorationStyle: 'none',
      textDecorationLine: 'none',
      color: 'rgb(206, 206, 206)',
    }
    return (
      <div id="contactButtons">
        <Link to="/page-2" style={linkStyle}>
          <span>
            <FontAwesomeIcon icon="envelope" />
          </span>
        </Link>
        <a
          href="https://github.com/skaplan01/"
          target="_blank"
          style={{ color: 'rgb(206, 206, 206)', textDecoration: 'none' }}
        >
          <span>
            <FontAwesomeIcon icon={['fab', 'github']} />
          </span>
        </a>
        <span>
          <a
            href="https://www.linkedin.com/in/sarah-kaplan-dev/"
            target="_blank"
            style={{ color: 'rgb(206, 206, 206)', textDecoration: 'none' }}
          >
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
          </a>
        </span>
        <span
          id="resumeIcon"
          style={{ paddingLeft: '12px', paddingRight: '12px' }}
        >
          <a
            href={sarahKaplanResume}
            target="_blank"
            style={{ textDecoration: 'none', lineHeight: '9px' }}
          >
            <FontAwesomeIcon icon="file-download" color="rgb(206, 206, 206)" />
          </a>
        </span>
        {/* <div style={{ display: 'inline-block', width: '6em', height: '3em' }}>
          <span style={{ paddingLeft: '13px', paddingRight: '13px' }}>
            <a
              href={sarahKaplanResume}
              target="_blank"
              style={{ textDecoration: 'none', lineHeight: '9px' }}
            >
              <FontAwesomeIcon
                icon="file-download"
                color="rgb(206, 206, 206)"
              />
            </a>
          </span>
          <p
            style={{
              margin: '0px',
              padding: '0px',
              color: 'rgb(206, 206, 206)',
            }}
          >
            Resume
          </p>
        </div> */}
      </div>
    )
  }
}

export default ContactButtons

//other icon color options
// #3f52b5
//#3649a5
//#A99FA1
// #938191
// #3d52af
