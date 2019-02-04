import React from 'react'
import { Link } from 'gatsby'
import Container from '../components/Container'
import Nav from '../components/atoms/Nav'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <div id="modalContainer" />
    <div id="outerBox">
      <div id="leftFill" />
      <div id="positioned">
        <Nav />
        <Container />
      </div>
      <div id="rightFill" />
    </div>
  </Layout>
)

export default IndexPage
