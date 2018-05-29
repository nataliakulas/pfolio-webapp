import React from 'react';
import {Container, Row, Col} from 'react-grid-system';

import ContactForm from './ContactForm';
import Home from './media/home';
import Portfolio from './media/portfolio';
import Social from './media/social';
import Contact from './media/contact';
import Settings from './media/settings';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      section: false,
      contact: true
    }
  }

  sectionOpen = () => {
    this.setState({section: true})
  };

  sectionClose = () => {
    this.setState({section: false})
  };

  render() {
    const ico = "#ffffff";
    const nav = "red";
    const bg = "#000000";

    return (
      <div className="background" style={{backgroundImage: `repeating-linear-gradient(${bg} 0, ${bg} 50px, ${ico} 0, ${ico} 100px)`}}>
        {/*<ContactForm/>*/}
        <Container>
          <Row>
            <Col lg={6} offset={{lg: 3}}>
              <div className="stripe-wrapper">
                <div className="stripe">
                  <div className="stripe-content">
                    This is stripe, stripe is fun
                  </div>
                  <div className={`nav-stripe ${this.state.section ? " top" : " bottom"}`} style={{backgroundColor: nav}}>
                    <ul>
                      <li onClick={this.sectionClose}><Home fill={ico}/></li>
                      <li onClick={this.sectionOpen}><Portfolio fill={ico}/></li>
                      <li onClick={this.sectionOpen}><Social fill={ico}/></li>
                      <li onClick={this.sectionOpen}><Contact fill={ico}/></li>
                      <li onClick={this.sectionOpen}><Settings fill={ico} bg={nav}/></li>
                    </ul>
                  </div>
                </div>
                <div className={`section${this.state.section && this.state.contact ? " open" : ""}`}>

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

