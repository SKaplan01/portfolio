import React, { Component } from 'react'
import './nav.css'
import MenuListComposition from './MenuListComposition'
import { Link } from 'gatsby'
// import NavLink from './NavLink'

class Nav extends Component {
  render() {
    return (
      <div id="navContainer">
        <div id="navContainer-full">
          <Link to="/">
            <span>Home</span>
          </Link>
          <Link to="/page-2">
            <span>About</span>
          </Link>
          <Link to="/page-2">
            <span>Contact</span>
          </Link>
        </div>
        <div id="navContainer-min">
          <MenuListComposition />
        </div>
      </div>
    )
  }
}

export default Nav
