import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

const Post = (props) => {
    const { content } = props;
    return (
        <div>
            <article>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-12 mx-auto" dangerouslySetInnerHTML={{__html: content}} >
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}

export default Post;