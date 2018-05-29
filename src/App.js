import React from 'react';
import logo from './logo.svg';
import './App.css';

import ContactForm from './ContactForm'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ContactForm/>
      </div>
    );
  }
}

export default App;
