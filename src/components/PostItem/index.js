import React, { Component } from 'react';

class PostItem extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <div>
            <div className="post-preview">
                <a href={"post/"+this.props.slug}>
                <h2 className="post-title">
                    {this.props.title}
                </h2>
                <h3 className="post-subtitle">
                {this.props.sub_title}
                </h3>
                </a>
                <p className="post-meta">Posted by
                <a href="javscript::void(0)"> {this.props.author} </a>
                on {this.props.created_at}</p>
            </div>
            <hr />
            </div>
        );
    }
}

export default PostItem;