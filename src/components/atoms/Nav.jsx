import React, { Component } from 'react'
import './nav.css'
import MenuListComposition from './MenuListComposition'
import Hamburger from './Hamburger'
import { Link } from 'gatsby'

class Nav extends Component {
  render() {
    return (
      <div id="navContainer-full">
        <div id="navContainer-left">
          <Link to="/">
            <span>Home</span>
          </Link>
        </div>
        <div id="navContainer-right">
          <Link to="/about">
            <span>About</span>
          </Link>

          <Link to="/contact">
            <span>Contact</span>
          </Link>
        </div>
        {/* <hr /> */}
        {/* <div id="navContainer-min"> */}
        {/* <Hamburger /> */}
        {/* <MenuListComposition /> */}
        {/* </div> */}
      </div>
    )
  }
}

export default Nav
