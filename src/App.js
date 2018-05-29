import React from 'react';
import {Container, Row, Col} from 'react-grid-system';

import ContactForm from './ContactForm';
import Home from './media/home';
import Portfolio from './media/portfolio';
import Social from './media/social';
import Contact from './media/contact';
import Settings from './media/settings';


const black = '#171717';
const navy = '#02202B';
const red = '#B80C09';
const onyx = '#35393c';
const grey = '#dadbdb';
const white = '#ffffff';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      section: false,
      portfolio: false,
      contact: false,
      settings: false,
      nav: red,
      style: {backgroundImage: `repeating-linear-gradient(${black} 0, ${black} 50px, ${white} 0, ${white} 100px)`}
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

  changeTheme(color) {
    switch (color) {
      case 'black':
        this.setState({nav: red, style: {backgroundImage: `repeating-linear-gradient(${black} 0, ${black} 50px, ${white} 0, ${white} 100px)`}});
        break;
      case 'navy':
        this.setState({nav: red, style: {backgroundImage: `repeating-linear-gradient(${navy} 0, ${navy} 50px, ${white} 0, ${white} 100px)`}});
        break;
      case 'red':
        this.setState({nav: black, style: {backgroundImage: `repeating-linear-gradient(${red} 0, ${red} 50px, ${white} 0, ${white} 100px)`}});
        break;
      case 'onyx':
        this.setState({nav: grey, style: {backgroundImage: `repeating-linear-gradient(${onyx} 0, ${onyx} 50px, ${white} 0, ${white} 100px)`}});
        break;
      default:
        this.setState({nav: onyx, style: {backgroundImage: `repeating-linear-gradient(${grey} 0, ${grey} 50px, ${white} 0, ${white} 100px)`}});
    }
  }

  render() {
    return (
      <div className="background" style={this.state.style}>
        <Container>
          <Row>
            <Col lg={6} offset={{lg: 3}}>
              <div className="stripe-wrapper">
                <div className={`stripe${this.state.section ? " close" : ""}`}>
                  <div className="stripe-content">
                    This is stripe, stripe is fun
                    {/*<Settings fill={ico} bg={nav}/>*/}
                    <div className="settings-wrapper">
                      <div className="square black" onClick={() => this.changeTheme('black')}/>
                      <div className="square navy" onClick={() => this.changeTheme('navy')}/>
                      <div className="square red" onClick={() => this.changeTheme('red')}/>
                      <div className="square onyx" onClick={() => this.changeTheme('onyx')}/>
                      <div className="square " onClick={() => this.changeTheme('')}/>
                    </div>
                  </div>
                  <div className={`nav-stripe ${this.state.section ? " top" : " bottom"}`} style={{backgroundColor: this.state.nav}}>
                    <ul>
                      <li onClick={this.sectionClose}><Home fill={white}/></li>
                      <li onClick={() => this.sectionOpen('portfolio')}><Portfolio fill={white}/></li>
                      <li onClick={() => this.sectionOpen('contact')}><Contact fill={white}/></li>
                    </ul>
                  </div>
                </div>
                <div className={`section${this.state.section ? " open" : ""}`}>
                  {this.state.portfolio ?
                    <div>this is portfolio section</div> : null
                  }
                  {this.state.contact ?
                    <div>this is contact section</div> : null
                  }
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

