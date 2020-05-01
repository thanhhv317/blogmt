import React, { Component } from 'react';

class PostHeader extends Component {
    render() {
        return (
            <div>
                <header className="masthead" style={{backgroundImage: 'url("assets/img/post-bg.jpg")'}}>
                <div className="overlay" />
                <div className="container">
                    <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <div className="post-heading">
                        <h1>Man must explore, and this is exploration at its greatest</h1>
                        <h2 className="subheading">Problems look mighty small from 150 miles up</h2>
                        <span className="meta">Posted by
                            <a href="#">Start Bootstrap</a>
                            on August 24, 2019</span>
                        </div>
                    </div>
                    </div>
                </div>
                </header>
            </div>
        );
    }
}

export default PostHeader;