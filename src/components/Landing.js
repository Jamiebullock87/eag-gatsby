import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Link from 'gatsby-link'
import uk from '../images/uk.svg'
import uae from '../images/uae.svg'

class Landing extends Component {
  render() {
    return (
      <div className="landing-page-wrapper">
        <div className="uk-map">
          <Link to="/UK">UK</Link>
          <img src={uk} />
        </div>
        <div className="uae-map">
          <Link to="/UAE">UAE</Link>
          <img src={uae} />
        </div>
      </div>
    )
  }
}
 
export default Landing