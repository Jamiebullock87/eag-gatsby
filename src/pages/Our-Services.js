import React from 'react'
import Link from 'gatsby-link'
import Navigation from '../components/Navigation'
import Services from '../components/Services'
import Footer from '../components/Footer'

const OurServices = ({data}) => (
  <div className="height">
    <Navigation />
    <Services />
    <Footer />
  </div>
)

export default OurServices
