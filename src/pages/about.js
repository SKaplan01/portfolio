import React from 'react'
import { Link } from 'gatsby'
import ContainerAbout from '../components/ContainerAbout'
import Nav from '../components/atoms/Nav'
import Layout from '../components/layout'

const AboutPage = () => (
  <Layout>
    <div id="outerBox">
      <div id="leftFill" />
      <div id="positioned">
        <Nav />
        <ContainerAbout />
      </div>
      <div id="rightFill" />
    </div>
  </Layout>
)

export default AboutPage
