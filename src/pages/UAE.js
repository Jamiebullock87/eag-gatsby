import React from 'react'
import Link from 'gatsby-link'
import Navigation from '../components/Navigation'
import HomeCarousel from '../components/HomeCarousel'
import Footer from '../components/Footer'

const UAE = ({data}) => (
  <div className="height">
    <Navigation />
    <div className="carousel-wrapper">
      <HomeCarousel />
    </div>
    <Footer />
  </div>
)

export default UAE

