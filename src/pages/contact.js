import React from 'react'
import { Link } from 'gatsby'
import ContainerContact from '../components/ContainerContact'
import Nav from '../components/atoms/Nav'
import Layout from '../components/layout'

const ContactPage = () => (
  <Layout>
    <div id="outerBox">
      <div id="leftFill" />
      <div id="positioned">
        <Nav />
        <ContainerContact />
      </div>
      <div id="rightFill" />
    </div>
  </Layout>
)

export default ContactPage
