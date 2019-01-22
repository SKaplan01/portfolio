import React from 'react'
import { Link } from 'gatsby'
import Container from '../components/Container'
import Nav from '../components/atoms/Nav'
// import Button from '@material-ui/core/Button'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <div id="modalContainer" />
    <Nav />
    <Container />
  </Layout>
)

export default IndexPage
