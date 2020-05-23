import React from 'react';
import './../App.css';
import Nav from './Nav';
import Footer from './Footer';
import PageSwitch from './PageSwitch';
import BackToTop from './BackToTop';
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
        <BackToTop/>
        <PageSwitch/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
