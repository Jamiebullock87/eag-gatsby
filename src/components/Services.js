import React from 'react'
import Link from 'gatsby-link'
import Service from './Service'
import Hover from './Hover'

class Services extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="services-wrapper">
        <div className="page-header">
          <h1>What We Offer</h1>
          <hr className="short-hr" />
          <h3>European Aluminium & Glass LLC is based on sound core principals.
          This has become the cornerstone of our success and we shall continue to maintain
          that philosophy to ensure we are the Client’s, Contractor’s and Subcontractor’s first choice through...</h3>
        </div>
        <div className="services-body">
          <div className="services">
            <Hover onHover={<div className="facades">
                              <h3 className="center-text">Facades & Doors</h3>
                              <p className="justify-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </div>}>
                            <div className="facades">
                              <h3 className="center-text">Facades & Doors</h3>
                            </div>
            </Hover>
            <Hover onHover={<div className="deseng">
                              <h3 className="center-text">Design & Engineering</h3>
                              <p className="justify-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </div>}>
                            <div className="deseng">
                              <h3 className="center-text">Design & Engineering</h3>
                            </div>
            </Hover>
            <Hover onHover={<div className="acp">
                              <h3 className="center-text">Aluminium Composite Panels</h3>
                              <p className="justify-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </div>}>
                            <div className="acp">
                              <h3 className="center-text">Aluminium Composite Panels</h3>
                            </div>
            </Hover>
            <Hover onHover={<div className="glass">
                              <h3 className="center-text">Specialist Glass</h3>
                              <p className="justify-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </div>}>
                            <div className="glass">
                              <h3 className="center-text">Specialist Glass</h3>
                            </div>
            </Hover>
          </div>
        </div>
      </div>
    )
  }
}

export default Services