import React from 'react'
import Link from 'gatsby-link'

class Services extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isHovered: false
    }
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(e) {
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded
    })
  }

  render() {
    const {title, children, serviceClass} = this.props;
    
    return (
      <div className={`service ${serviceClass} ${this.state.isExpanded ? 'open' : ''}`} onClick={(e) => this.handleToggle(e)}>
        <div className="service-title">
          <h3>{title}</h3>
        </div>
        <div className="service-body">
          {children}
        </div>
      </div>
    )
  }
}

export default Services