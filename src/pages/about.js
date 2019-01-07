import React from 'react'
import { Link } from 'gatsby'
import ContainerAbout from '../components/ContainerAbout'
import Nav from '../components/atoms/Nav'
import Layout from '../components/layout'

const AboutPage = () => (
  <Layout>
    <Nav />
    <ContainerAbout />
  </Layout>
)

export default AboutPage
