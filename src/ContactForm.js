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
      <form method="POST" action="/">
        <p>{this.props.translate ?
          "If you have any questions, or wish to contact me, please send me a message." :
          "Jeżeli masz do mnie jakies pytania, lub chciałbyś się ze mną skontaktować, wyślij mi wiadomość."}</p>
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
        <button style={{backgroundColor: this.props.field}} type="submit">
          <span>{this.props.translate ? "Send" : "Wyślij"}</span>
        </button>
        <div>
          {window.location.hash === '#success' &&
          <div id="success">
            <p>{this.props.translate ? "Your message has been sent!" : "Wiadomość została wysłana!"}</p>
          </div>
          }
          {window.location.hash === '#error' &&
          <div id="error">
            <p>{this.props.translate ? "An error occured while submitting the form." : "W czasie wysyłania formularza wystąpił błąd."}</p>
          </div>
          }
        </div>
      </form>
    )
  }
}


