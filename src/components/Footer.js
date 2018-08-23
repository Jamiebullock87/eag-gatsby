import React from 'react'
import Link from 'gatsby-link'
import logo from '../images/logo.svg'

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <p>European Aluminium & Glass LLC</p>
        <p>Unit 42 & 47 Al Tayer Complex,</p>
        <p>Al Quoz,</p>
        <p>Dubai, UAE</p>
        <p>PO Box 99435</p>

        <p>Trade License No: 763627</p>
        <p><a href="#">TRN NO xxx x x x x x xxx</a></p>
        <p><a href="#">Makani No: 22122 82508</a></p>
        <p><a href="#">Our Location</a></p>
        <p>Tel: <a href="#">+971 4 273 5200</a></p>
        <p>Email: <a href="#">info@e-ag.me</a></p>
        <p>FB</p>
        <p>LI</p>
        <p>MAIL</p>
      </footer>
    )
  }
}

export default Footer