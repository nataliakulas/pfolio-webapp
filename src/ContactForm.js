import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  render() {
    console.log(this.state.message)
    return (
      <form className="swipe" method="POST" action={process.env.NODE_ENV === "production" ? "https://stripefolio.herokuapp.com/" : "/"}>
        <p>{this.props.translate ?
          "If you have any questions, or just wish to contact me, please send me a message." :
          "Jeżeli masz do mnie pytanie, lub chciał(a)byś się ze mną skontaktować, wyślij mi wiadomość."}</p>
        <div className="field" style={{backgroundColor: this.props.field}}>
          <input type="text" name="name"
                 className={`${this.state.name.length > 0 ? "filled" : ""}`} style={{borderColor: this.props.field}}
                 onChange={e => this.setState({'name': e.target.value})}/>
          <label htmlFor="name">{this.props.translate ? "Name" : "Imię"}</label>
        </div>
        <div className="field" style={{backgroundColor: this.props.field}}>
          <input type="email" name="email"
                 className={`${this.state.email.length > 0 ? "filled" : ""}`} style={{borderColor: this.props.field}}
                 onChange={e => this.setState({'email': e.target.value})}/>
          <label htmlFor="email">E-mail</label>
        </div>
        <div className="field" style={{backgroundColor: this.props.field}}>
          <textarea name="message" rows="5"
                    className={`${this.state.message.length > 0 ? "filled" : ""}`} style={{borderColor: this.props.field}}
                    onChange={e => this.setState({'message': e.target.value})}/>
          <label htmlFor="message">{this.props.translate ? "Message" : "Wiadomość"}</label>
        </div>
        <button className="button submit" style={{backgroundColor: this.props.field}} type="submit"
                disabled={this.state.name.length === 0 || this.state.email.length === 0 || this.state.message.length === 0}>
          <span>{this.props.translate ? "Send" : "Wyślij"}</span>
        </button>
      </form>
    )
  }
}