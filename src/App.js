import React from 'react';
import {Container, Row, Col} from 'react-grid-system';

import HomeIco from './media/home';
import PortfolioIco from './media/portfolio';
import ContactIco from './media/contact';
import SocialIco from './media/social';
import SettingsIco from './media/settings';

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
      primary: turquoise,
      secondary: grey,
      style: {backgroundImage: `repeating-linear-gradient(${grey} 0, ${grey} 50px, ${white} 0, ${white} 100px)`},
      translate: false
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

  toggleSettings = () => {
    this.setState({settings: !this.state.settings})
  };

  changeTheme(color) {
    switch (color) {
      case 'black':
        this.setState({settings: false, primary: red, secondary: black, style: {backgroundImage: `repeating-linear-gradient(${black} 0, ${black} 50px, ${white} 0, ${white} 100px)`}});
        break;
      case 'orange':
        this.setState({settings: false, primary: navy, secondary: orange, style: {backgroundImage: `repeating-linear-gradient(${orange} 0, ${orange} 50px, ${white} 0, ${white} 100px)`}});
        break;
      default:
        this.setState({settings: false, primary: turquoise, secondary: grey, style: {backgroundImage: `repeating-linear-gradient(${grey} 0, ${grey} 50px, ${white} 0, ${white} 100px)`}});
    }
  }

  toggleTranslation() {
    this.setState({translate: !this.state.translate})
  };

  render() {
    return (
      <div className="background" style={this.state.style}>
        <Container>
          <Row>
            <Col lg={6} offset={{lg: 3}}>
              <div className="wrapper">
                <div className={`stripe${this.state.section ? " close" : " open"}`}>
                  <div className="content" style={{position: 'relative'}}>
                    <SettingsIco className="settings" onClick={this.toggleSettings} fill={this.state.primary} bg={white}/>
                    <a href="https://www.linkedin.com/in/natalia-kulas"><SocialIco className="social" fill={this.state.primary}/></a>
                    <div className={`settings-bar${this.state.settings ? " visible" : ""}`}>
                      <div className="square black" onClick={() => this.changeTheme('black')}/>
                      <div className="square orange" onClick={() => this.changeTheme('orange')}/>
                      <div className="square grey " onClick={() => this.changeTheme('')}/>
                      <div className="separator" style={{borderTopColor: this.state.secondary}}/>
                      <div className="square" style={{color: this.state.primary}} onClick={() => this.toggleTranslation()}>{this.state.translate ? "pl" : "en"}</div>
                    </div>
                    <Row>
                      <Col>
                        <div className="content">
                          {this.state.translate ? "en" :
                            <div>
                            </div>
                          }
                        </div>
                      </Col>
                      <Col>
                        <div className="content">
                          <p>{this.state.translate ? "en" : "pl"}</p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
                <div className={`stripe-bar`} style={{backgroundColor: this.state.primary}}>
                  <ul>
                    <li onClick={this.sectionClose}><HomeIco fill={white}/></li>
                    <li onClick={() => this.sectionOpen('portfolio')}><PortfolioIco fill={white}/></li>
                    <li onClick={() => this.sectionOpen('contact')}><ContactIco fill={white}/></li>
                  </ul>
                </div>
                <div className={`section${this.state.section ? " open" : ""}`}>
                  <div className="content">
                    {this.state.portfolio ?
                      <Row style={{height: '100%'}}>
                        <Col>
                        </Col>
                      </Row> : null}
                    {this.state.contact ?
                      <Row>
                        <Col>
                          <div className="content">
                            <ContactForm field={this.state.primary} input={this.state.secondary} translate={this.state.translate}/>
                          </div>
                        </Col>
                      </Row> : null}
                  </div>
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

