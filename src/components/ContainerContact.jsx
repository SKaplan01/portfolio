import React, { Component } from 'react'
import { Link } from 'gatsby'
import Intro from './atoms/Intro'
import ContactForm from './molecules/ContactForm'
import './container.css'

class ContainerContact extends Component {
  render() {
    return (
      <div className="container">
        <div className="left contact">
          <div className="overlay">
            <div className="main-content">
              <Intro />
            </div>
          </div>
          <a id="workLink" />
        </div>
        <div className="right mobile">
          <div className="navContainer-right navWide">
            <Link to="/">
              <span>Home</span>
            </Link>
            <Link to="/about">
              <span>About</span>
            </Link>

            <Link to="/contact">
              <span>Contact</span>
            </Link>
          </div>
          <ContactForm />
        </div>
      </div>
    )
  }
}

export default ContainerContact
