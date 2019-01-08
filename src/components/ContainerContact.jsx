import React, { Component } from 'react'
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
        <div className="right">
          <ContactForm />
        </div>
      </div>
    )
  }
}

export default ContainerContact
