import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const Projects = ({data}) => (
  <div className="height">
    <Navigation />
    <div className="projects-wrapper">
      <div className="page-header">
        <h1>Completed Projects</h1>
        <hr className="short-hr" />
        <h3 className="center-text">The starting point of all achievement is desire</h3>
      </div>
      <div className="projects-container">    
          {data.allMarkdownRemark.edges.map(post => (
            <div className="project-container">
              <div className="column-left">
              <a key={post.node.id} href={post.node.frontmatter.path}><Img sizes={post.node.frontmatter.featuredImage.childImageSharp.sizes} /></a>
              </div>
              <div className="column-right">
                <a
                  key={post.node.id}
                  href={post.node.frontmatter.path}>
                  {post.node.frontmatter.title}
                </a>
                <p className="project-excerpt">{post.node.excerpt}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
    <Footer />
  </div>
)

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(limit: 10) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          frontmatter {
            title
            path
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
    }
  }
`

export default Projects

