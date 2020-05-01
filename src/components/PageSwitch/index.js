import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from './../Home';
import About from './../About';
import Post from './../Post';
import Contact from './../Contact';
import Header from '../Header';
import PostHeader from './../PostHeader';


class PageSwitch extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/">
                        <Header/>
                        <Home />
                    </Route>
                    <Route path="/about">
                        <Header/>
                        <About />
                    </Route>
                    <Route path="/post">
                        <PostHeader/>
                        <Post />
                    </Route>
                    <Route path="/contact">
                        <Header/>
                        <Contact />
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default PageSwitch;