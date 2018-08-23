import React from 'react'
import Link from 'gatsby-link'
import logo from '../images/logo.svg'

class Navigation extends React.Component {
  render() {
    return (
      <nav className="nav-bar">
        <div className="logo-container">
          <img src={logo} />
        </div>
        <ul className="main-nav">
          <li className="nav-link"><Link to="/UAE">HOME</Link></li>
          <li className="nav-link"><Link to="/Why-Us">WHY US</Link></li>
          <li className="nav-link"><Link to="/Our-Services">OUR SERVICES</Link></li>
          <li className="nav-link"><Link to="/Projects">PROJECTS</Link></li>
          <li className="nav-link"><Link to="/Our-Team">OUR TEAM</Link></li>
          <li className="nav-link"><Link to="/Contact">CONTACT</Link></li>
        </ul>
      </nav>
    )
  }
}

export default Navigation