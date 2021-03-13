import React from 'react';
import moment from 'moment';
const Post = ({blog}) =>{


return (
  <div className="post">
    <h1 className="post-title">{blog.title}</h1>
    <div className="post-byline"><span className="post-byline-author">{blog.author}</span> {moment().startOf('hour').fromNow()}</div>
    <img src={blog.imageUrl} className="post-image"/>
    <p>{blog.body}</p>
   
  </div>
)
}
export default Post;