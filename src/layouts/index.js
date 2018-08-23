import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import '../css/style.scss'

const TemplateWrapper = ({children}) => (
    <div className="height">
      <Helmet
        title="European Aluminium & Glass"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <div className="height">
        {children()}
      </div>
    </div>
  )

export default TemplateWrapper