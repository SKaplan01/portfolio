import React from 'react'
import { Link } from 'gatsby'
import ContainerContact from '../components/ContainerContact'
import Nav from '../components/atoms/Nav'
import Layout from '../components/layout'

const ContactPage = () => (
  <Layout>
    <Nav />
    <ContainerContact />
  </Layout>
)

export default ContactPage
