import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from './../Home';
import About from './../About';
import Contact from './../Contact';
import Header from '../Header';
import PostDetail from './../PostDetail';


class PageSwitch extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/">
                        <Header background="assets/img/home-bg.jpg" title="BlogMT-javascript " content=""/>
                        <Home />
                    </Route>
                    <Route path="/about">
                        <Header background="assets/img/about-bg.jpg" title="About us" content=""/>
                        <About />
                    </Route>
                    <Route path="/post/:slug" >
                        <PostDetail/>
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default PageSwitch;