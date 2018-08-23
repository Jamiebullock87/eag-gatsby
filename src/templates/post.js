import React from 'react';
import Helmet from 'react-helmet';
import Img from 'gatsby-image'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function Template({data}) {
  const post = data.markdownRemark;
  return (
    <div className="height">
      <Navigation />
      <div className="post-container">
        <div className="page-header">
          <h1>{post.frontmatter.title}</h1>
          <hr className="short-hr" />
        </div>
        <div className="featured-image">
          <Img sizes={post.frontmatter.featuredImage.childImageSharp.sizes} />
        </div>
        <div className="project-body" dangerouslySetInnerHTML={{__html: post.html}} />
        
      </div>
      <Footer />
    </div>
  )
}



export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        featuredImage {
          childImageSharp{
            sizes(maxWidth: 350) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`