import React from 'react'
import Link from 'gatsby-link'
import Navigation from '../components/Navigation'
import maleImage from '../images/member1.jpg'
import femaleImage from '../images/member2.jpg'
import Footer from '../components/Footer'

const OurTeam = ({data}) => (
  <div className="height">
    <Navigation />
    <div className="our-team">
      <div className="our-team-header">
        <h1 className="center-text">Our Team</h1>
        <hr className="short-hr" />
        <h4 className="center-text">We continually commit to employing the best in our industry.</h4>
        <h4 className="center-text">We encourage them to extend their professional capabilities and development which offers them the opportunity to progress their careers within the company.</h4>
        <h4 className="center-text">The professional expertise and dedication of our people is paramount to our success.</h4>
      </div>
      <div className="director1">
        <div className="team-image center-text">
          <img src={maleImage} width="240px" alt="male team member" />
        </div>
        <div className="team-text">
          <h3 className="center-text">Bruce Logan</h3>
          <hr className="short-hr" />
          <h4 className="center-text">Managing Director</h4>
          <p className="justify-text">With over 35 years of experience in the façade and cladding industry in UK and UAE. Holding an impressive portfolio of high end projects, delivered on time and within budget to the client’s satisfaction. Commercially aware and client focused, Bruce has built a solid and reliable name within the UAE for the company. Bruce’s hands on approach is well respected by his team and his managers.</p>
        </div>
      </div>
      <div className="director2">
        <div className="team-image center-text">
          <img src={femaleImage} width="240px" alt="female team member" />
        </div>
        <div className="team-text">
          <h3 className="center-text">Janet Logan</h3>
          <hr className="short-hr" />
          <h4 className="center-text">Director</h4>
          <p className="justify-text">A result driven, self-motivated and resourceful director with a proven ability to develop and strengthen the company in order to maximise company profitability and efficiency. Managing all aspects of finance to optimise the company’s financial performance and strategic position. Contributes fully to the development across all areas of the business, challenging assumptions and decision-making as appropriate and providing financial analysis and guidance on all activities, plans, targets and projects. Ensures that company financial systems are robust, compliant and support current activities and future growth.</p>
        </div>
      </div>
      <div className="opsmanager">
        <div className="team-image center-text">
          <img src={maleImage} width="240px" alt="male team member" />
        </div>
        <div className="team-text">
          <h3 className="center-text">Shyju Kizhakkayil</h3>
          <hr className="short-hr" />
          <h4 className="center-text">Operations Manager</h4>
          <p className="justify-text">Shyju is a highly driven Operations Manager, with over 15 years extensive experience in facades. From initial stages of design, through to execution he has the proven ability to successfully lead the team through every stage of the project and on to completion. He has built himself and the company a reputable name as façade professionals.</p>
        </div>
      </div>
      <div className="staff">
        <div className="team-image center-text">
          <img src='https://via.placeholder.com/900x250' width="100%" alt="staff" />
        </div>
        <div className="team-text">
          <h3 className="center-text">Our Staff</h3>
          <p className="justify-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
        </div>
      </div>
      <div className="fitters">
        <div className="team-image center-text">
          <img src='https://via.placeholder.com/900x250' width="100%" alt="staff" />
        </div>
        <div className="team-text">
          <h3 className="center-text">Our Skilled Fitters</h3>
          <p className="justify-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
)

export default OurTeam

