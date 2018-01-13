import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import moment from 'moment';

import './App.css';

class App extends Component {
  render() {
    let today = moment().format('dddd, DD/MM/YYYY');
    return (
      <div className="App">
        <div className="wrapper">
          <header className="header">
            <Navbar>
              <Navbar.Header>
                <Navbar.Brand>
                  <a href="#home">{today}</a>
                </Navbar.Brand>
              </Navbar.Header>
            </Navbar>
          </header>
          <main className="main"></main>
          <footer className="footer"></footer>
        </div>
      </div>
    );
  }
}

export default App;
