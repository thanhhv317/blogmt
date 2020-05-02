import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                <div className="container">
                    <a className="navbar-brand" href="index.html">Start Bootstrap</a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                        <NavLink className="nav-link"  to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
            </div>
        );
    }
}

export default Nav;