import React from 'react';
import './../App.css';
import Nav from './Nav';
import Footer from './Footer';
import PageSwitch from './PageSwitch';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <PageSwitch/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
