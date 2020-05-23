import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import PostHeader from './../PostHeader';
import Post from './../Post';

const PostDetail = (props) => {
    const { slug } = useParams();
    const [ data, setData ] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/posts/${slug}`)
        .then(res => res.json())
        .then(
            (result) => {
                const { data } = result;
                setData(data)

            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
               
            }
        )
    }, []);
   if (data.length === 0) {
       return null;
   }
    return (
        <div>
            <PostHeader title={data[0].title} author={data[0].author} createdDate={data[0].createdDate}/>
            <Post  content={data[0].content}/>
        </div>
        
    )
}

export default PostDetail;