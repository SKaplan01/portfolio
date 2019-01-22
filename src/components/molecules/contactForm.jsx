import React, { Component } from 'react'
import sarahKaplanResume from '../../assets/sarahKaplanResume.pdf'
import ContactButtons from '../atoms/ContactButtons'
// import {
//   Button,
//   Form,
//   FormGroup,
//   Label,
//   Input,
//   Col,
//   ButtonGroup,
// } from 'reactstrap'
import './contactForm.css'

class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      error: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    })
  }

  handleSubmit(evt) {}

  render() {
    return (
      <div id="formContainer">
        <h4>Let's Connect!</h4>
        <form action="https://formspree.io/skaplandev@gmail.com" method="POST">
          <div className="formRow">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" />
          </div>
          <div className="formRow">
            <label htmlFor="message">Message:</label>
            <textarea type="textarea" name="message" />
          </div>
          <div className="formRow">
            <label htmlFor="email">Email:</label>
            <input type="email" name="_replyto" />
          </div>
          <div id="submitRow">
            <input type="submit" value="Send" />
          </div>
          <div>{this.state.error ? `${this.state.error}` : null}</div>
        </form>
        <div id="contactOptions">
          <h4>Or reach me at...</h4>
          <ul>
            <li>skaplandev@gmail.com</li>
            <li>
              Download my{' '}
              <a href={sarahKaplanResume} target="_blank">
                resume
              </a>
            </li>
            <li>
              Check out my work on{' '}
              <a href="https://github.com/skaplan01/" target="_blank">
                Github
              </a>
            </li>
            <li>
              Connect with me on{' '}
              <a href="https://www.linkedin.com/in/sarah-kaplan-dev/">
                linkedIn
              </a>
            </li>
          </ul>
        </div>
        <div id="buttonsBottom">
          <ContactButtons contactPage="contactPage" />
        </div>
      </div>
    )
  }
}

export default ContactForm
