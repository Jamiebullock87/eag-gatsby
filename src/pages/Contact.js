import React from 'react'
import Link from 'gatsby-link'
import ContactForm from '../components/ContactForm'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const Contact = ({data}) => (
  <div className="height">
    <Navigation />
    <div className="contact-wrapper">
      <div className="page-header">
        <h1>Get In Touch</h1>
        <hr className="short-hr" />
      </div>
      <ContactForm />
    </div>
      
    <Footer />
  </div>
)

export default Contact
