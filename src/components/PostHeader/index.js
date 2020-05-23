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
                        <h2 className="subheading"></h2>
                        <span className="meta">Đăng bởi
                            <a style={{cursor:"pointer"}}> {this.props.author} </a>
                            lúc {
                            this.props.createdDate.slice(0, 10).split("-").reverse().join("/")
                            .concat(' ')
                            .concat(this.props.createdDate.slice(11, 16))
                            
                            }
                        </span>
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