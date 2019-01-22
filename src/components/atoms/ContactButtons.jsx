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
      color: 'rgb(245, 243, 243)',
    }
    return (
      <div id="contactButtons" className={this.props.contactPage}>
        <Link to="/contact" style={linkStyle}>
          <span id="emailButton">
            <FontAwesomeIcon icon="envelope" />
          </span>
        </Link>
        <a
          href="https://github.com/skaplan01/"
          target="_blank"
          style={{ color: 'rgb(245, 243, 243)', textDecoration: 'none' }}
        >
          <span>
            <FontAwesomeIcon icon={['fab', 'github']} />
          </span>
        </a>
        <span>
          <a
            href="https://www.linkedin.com/in/sarah-kaplan-dev/"
            target="_blank"
            style={{ color: 'rgb(245, 243, 243)', textDecoration: 'none' }}
          >
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
          </a>
        </span>
        <span
          id="resumeIcon"
          style={{ paddingLeft: '0.6em', paddingRight: '0.6em' }}
        >
          <a
            href={sarahKaplanResume}
            target="_blank"
            style={{ textDecoration: 'none', lineHeight: '9px' }}
          >
            <FontAwesomeIcon icon="file-download" color="rgb(245, 243, 243)" />
          </a>
        </span>
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
