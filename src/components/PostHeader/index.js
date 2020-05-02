import React, { Component } from 'react';

class PostHeader extends Component {
    render() {
        return (
            <div>
                <header className="masthead" style={{backgroundImage: 'url("../assets/img/post-bg.jpg")'}}>
                <div className="overlay" />
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12 col-md-12 mx-auto">
                        <div className="post-heading">
                        <h1>{this.props.title}</h1>
                        <h2 className="subheading">Problems look mighty small from 150 miles up</h2>
                        <span className="meta">Posted by
                            <a style={{cursor:"pointer"}}> {this.props.author} </a>
                            on {this.props.createdDate}</span>
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