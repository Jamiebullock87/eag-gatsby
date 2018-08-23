import React from 'react'
import Link from 'gatsby-link'
import bgImage from '../images/whyus-bg.jpg'
import bgImageDark from '../images/whyus-bg-dark.jpg'

class WhyContent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="whyus whyus-bg">
          <div className="whyus-firstrow center-text page-header">
            <h1>Why Choose EAG?</h1>
            <hr className="short-hr" />
            <h4>European Aluminium & Glass LLC is based on sound core principals. This has become the cornerstone of our success and we shall continue to maintain that philosophy to ensure we are the Client’s, Contractor’s and Subcontractor’s first choice through...</h4>
          </div>
          <div className="whyus-quality">
            <h3 className="center-text">Quality</h3>
            <p>Here at EAG, we believe the starting point of all achievement is desire.</p>
            <p>Through training and guidance, we pass down our experience and knowledge through all the team to ensure our clients are delivered a quality project from start to completion.</p>
            <p id="nopadding">“Quality is never an accident; it is always the result of high intention, sincere effort, intelligent direction and skilful execution; it represents the wise choice of many alternatives”.</p>
            <p className="right-text">- William A Foster</p>
          </div>
          <div className="whyus-safety">
            <h3 className="center-text">Safety</h3>
            <p>The safety of each employee at EAG is more than a priority; it is a value that is ingrained in the way we conduct our business</p>
            <p>We expect complete dedication to the elimination of unsafe practices and conditions. All employees, regardless of position, will uphold this philosophy in their day-to-day activities. </p>
            <p>Daily Tool Box Talks are a valuable part of our safety program on all projects. When planned and done properly, the benefits are well worth our investment of time and effort.</p>
            <p className="center-text"><span className="bold-text">Target – ZERO incidents!</span></p>
          </div>
          <div className="whyus-integrity">
            <h3 className="center-text">Integrity</h3>
            <p>To give real service you must add something which cannot be bought or measured with money, and that is honesty and integrity.</p>
            <p>At AEG we have built a solid foundation based on these principles, which we believe our clients may not always want to hear but will appreciate!</p>
            <p>Valuable information in regard to the progress of a project should be shared not hidden away.</p>
            <p>The end goal is to complete in a timely and professional manner.</p>
          </div>
          <div className="whyus-service">
            <h3 className="center-text">Service</h3>
            <p>Our Project Management Team offers our clients a wealth of experience within the specialised industry of “Aluminium and Glass”</p>
            <ul className="whyus-list">
              <li>Fast, responsive and innovative.</li>
              <li>Able to oversee all aspects from concept to completion.</li>
              <li>Flexibility across large or small-scale projects</li>
              <li>Ability to integrate with client systems</li>
            </ul>
            <p>By working closely with consultants. EAG provides a turnkey solution for your project requirements. Ensuring that the right Project Management Team is selected to match our clients’ unique needs and expectations.</p>
          </div>
          <div className="whyus-transparency">
            <h3 className="center-text">Transparency</h3>
            <p>Transparency, in a business means honesty and openness. Transparency and accountability are generally considered to be the two main pillars of good corporate governance.</p>
            <p>Transparency is all about letting in and embracing new ideas, new technology and new approaches. No individual, entity or agency, no matter how smart, how old, or how experienced, can afford to stop learning.</p>
          </div>
          <div className="whyus-delivery">
            <h3 className="center-text">Delivery</h3>
            <p>The key to successful delivery of a project is planning. All construction projects have a completion date.</p>
            <p>Time taken to communicate, and plan is paramount. Regular progress meetings are carried out to ensure all the team are working to the same plan</p>
            <p>If you don't know where you are going. How can you expect to get there?</p>
          </div>
        </div>
      </div>
    )
  }
}

export default WhyContent