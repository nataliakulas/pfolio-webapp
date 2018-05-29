import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: false,
      email: false,
      message: false
    }
  }

  render() {
    return (
      <form method="POST" action="http://localhost:3000/contact">
        <div className="field" style={{backgroundColor: this.props.field}} onClick={() => this.setState({name: !this.state.name})}>
          <input type="text" name="name" style={{backgroundColor: this.props.input}} className={`${this.state.name ? "filled" : ""}`}/>
          <label htmlFor="name">Name</label>
        </div>
        <div className="field" style={{backgroundColor: this.props.field}} onClick={() => this.setState({email: !this.state.email})}>
          <input type="email" name="email" style={{backgroundColor: this.props.input}} className={`${this.state.email ? "filled" : ""}`}/>
          <label htmlFor="email">Email</label>
        </div>
        <div className="field" style={{backgroundColor: this.props.field}} onClick={() => this.setState({message: !this.state.message})}>
          <textarea name="message" rows="5" style={{backgroundColor: this.props.input}} className={`${this.state.message ? "filled" : ""}`}/>
          <label htmlFor="message">Message</label>
        </div>
        <button style={{backgroundColor: this.props.field}} type="submit">Send</button>
        <div>
          {window.location.hash === '#success' &&
          <div id="success">
            <p>Your message has been sent!</p>
          </div>
          }
          {window.location.hash === '#error' &&
          <div id="error">
            <p>An error occured while submitting the form.</p>
          </div>
          }
        </div>
      </form>
    )
  }
}


