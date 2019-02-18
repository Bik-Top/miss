import React, { Component } from 'react';
//import logo from './logo.svg';
 import './App.scss';

import Header from './components/Header';
import Works from './components/Works';
import Study from './components/Study';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Works/>
        <Study/>
        <Footer/>
      </div>
    );
  }
}

export default App;
