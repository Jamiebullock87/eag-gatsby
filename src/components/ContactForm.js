import React from 'react'

class ContactForm extends React.Component {
  render() {
    return (
      <div className="form-container">
        <form>
          <label>
            Name *
            <input type="text" name="name" />
          </label>
          <label>
            Email address *
            <input type="text" name="email" />
          </label>
          <label>
            Message
            <textarea></textarea>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default ContactForm