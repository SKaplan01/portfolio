import React, { Component } from 'react'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  ButtonGroup,
} from 'reactstrap'
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
        <form action="https://formspree.io/skaplandev@gmail.com" method="POST">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" />
          <label htmlFor="message">Message</label>
          <input type="text" name="message" />
          <label htmlFor="email">Email</label>
          <input type="email" name="_replyto" />
          <input type="submit" value="Send" />
        </form>
        {/* <Form onSubmit={this.handleSubmit}>
          <FormGroup className="formGroup" row>
            <Label className="label" htmlFor="email">
              Email
            </Label>
            <Col sm={6}>
              <Input
                className="input"
                type="email"
                name="_replyto"
                id="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>

          <FormGroup className="formGroup" row>
            <Label className="label" htmlFor="name">
              Name:
            </Label>
            <Col sm={6}>
              <Input
                className="input"
                type="text"
                name="name"
                id="name"
                value={this.state.firstName}
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>

          <FormGroup className="formGroup" row>
            <Label className="label" htmlFor="message">
              Message
            </Label>
            <Col sm={6}>
              <Input
                className="input"
                type="text"
                name="message"
                id="message"
                value={this.state.message}
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup check row>
            <Col sm={{ size: 10, offset: 2 }}>
              <Button>Submit</Button>
            </Col>
          </FormGroup>
        </Form>
        <div>{this.state.error ? `${this.state.error}` : null}</div> */}
      </div>
    )
  }
}

export default ContactForm
