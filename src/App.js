import React from 'react';
import {Container, Row, Col} from 'react-grid-system';

import Home from './media/home';
import Portfolio from './media/portfolio';
import Social from './media/social';
import Contact from './media/contact';
import Settings from './media/settings';

import ContactForm from './ContactForm';


const black = '#171717';
const red = '#B80C09';
const navy = '#364A62';
const orange = '#BA2D0B';
const grey = '#dbdbdb';
const turquoise = '#3587a4';
const white = '#ffffff';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      section: false,
      portfolio: false,
      contact: false,
      settings: false,
      nav: turquoise,
      style: {backgroundImage: `repeating-linear-gradient(${grey} 0, ${grey} 50px, ${white} 0, ${white} 100px)`},
      field: turquoise,
      input: grey
    }
  }

  sectionOpen(section) {
    switch (section) {
      case 'portfolio':
        this.setState({portfolio: true, contact: false});
        break;
      case 'contact':
        this.setState({portfolio: false, contact: true});
        break;
      default:
        this.setState({portfolio: false, contact: false});
    }
    this.setState({section: true})
  };

  sectionClose = () => {
    this.setState({section: false})
  };

  settings = () => {
    this.setState({settings: true})
  };

  changeTheme(color) {
    switch (color) {
      case 'black':
        this.setState({settings: false, field: red, input: black, nav: red, style: {backgroundImage: `repeating-linear-gradient(${black} 0, ${black} 50px, ${white} 0, ${white} 100px)`}});
        break;
      case 'orange':
        this.setState({settings: false, field: navy, input: orange, nav: navy, style: {backgroundImage: `repeating-linear-gradient(${orange} 0, ${orange} 50px, ${white} 0, ${white} 100px)`}});
        break;
      default:
        this.setState({settings: false, field: turquoise, input: grey, nav: turquoise, style: {backgroundImage: `repeating-linear-gradient(${grey} 0, ${grey} 50px, ${white} 0, ${white} 100px)`}});
    }
  }

  render() {
    return (
      <div className="background" style={this.state.style}>
        <Container>
          <Row>
            <Col lg={6} offset={{lg: 3}}>
              <div className="wrapper">
                <div className={`stripe${this.state.section ? " close" : ""}`}>
                  <div className="content">
                    <Settings className="settings" onClick={this.settings} fill={this.state.nav} bg={white}/>
                    <div className={`settings-bar${this.state.settings ? " visible" : ""}`}>
                      <div className="square black" onClick={() => this.changeTheme('black')}/>
                      <div className="square orange" onClick={() => this.changeTheme('orange')}/>
                      <div className="square " onClick={() => this.changeTheme('')}/>
                    </div>
                    <Row>
                      <Col>
                        <div className="photo"/>
                      </Col>
                      <Col>
                        <div className="content">
                          <p>....................</p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className={`stripe-bar ${this.state.section ? " top" : " bottom"}`} style={{backgroundColor: this.state.nav}}>
                    <ul>
                      <li onClick={this.sectionClose}><Home fill={white}/></li>
                      <li onClick={() => this.sectionOpen('portfolio')}><Portfolio fill={white}/></li>
                      <li onClick={() => this.sectionOpen('contact')}><Contact fill={white}/></li>
                    </ul>
                  </div>
                </div>
                <div className={`section${this.state.section ? " open" : ""}`}>
                  {this.state.portfolio ?
                    <Row>
                      <Col>
                        <div className="content">
                          <p>....................</p>
                        </div>
                      </Col>
                    </Row> : null}
                  {this.state.contact ?
                    <Row>
                      <Col>
                        <div className="content">
                          <p>If you have any questions, or wish to contact me,<br/> please send me a message!</p>
                          <ContactForm field={this.state.field} input={this.state.input}/>
                        </div>
                      </Col>
                    </Row> : null}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;

