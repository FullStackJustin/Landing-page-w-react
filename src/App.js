import './App.css';
import React from 'react';
import {Navbar} from './navbar.js'
import { Jumbotron } from './jumbotron';
import {Card} from './card.js';
import {Footer} from './footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Jumbotron/>
      <Card/>
      <Footer/>
    </div>
  );
}

export default App;
