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
      <form className="swipe" method="POST" action={process.env.NODE_ENV === "production" ? "https://stripefolio.herokuapp.com/" : "/"}>
        <p>{this.props.translate ?
          "If you have any questions, or just wish to contact me, please send me a message." :
          "Jeżeli masz do mnie pytanie, lub chciał(a)byś się ze mną skontaktować, wyślij mi wiadomość."}</p>
        <div className="field" style={{backgroundColor: this.props.field}} onClick={() => this.setState({name: true})}>
          <input type="text" name="name" className={`${this.state.name ? "filled" : ""}`}/>
          <label htmlFor="name">{this.props.translate ? "Name" : "Imię"}</label>
        </div>
        <div className="field" style={{backgroundColor: this.props.field}} onClick={() => this.setState({email: true})}>
          <input type="email" name="email" className={`${this.state.email ? "filled" : ""}`}/>
          <label htmlFor="email">E-mail</label>
        </div>
        <div className="field" style={{backgroundColor: this.props.field}} onClick={() => this.setState({message: true})}>
          <textarea name="message" rows="5" className={`${this.state.message ? "filled" : ""}`}/>
          <label htmlFor="message">{this.props.translate ? "Message" : "Wiadomość"}</label>
        </div>
        <button className="submit" style={{backgroundColor: this.props.field}} type="submit" disabled={!(this.state.name && this.state.email && this.state.message)}>
          <span>{this.props.translate ? "Send" : "Wyślij"}</span>
        </button>
      </form>
    )
  }
}