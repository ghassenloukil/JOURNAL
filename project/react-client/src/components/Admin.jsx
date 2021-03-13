import React from 'react';
import  moment from 'moment';
const Admin = ({blogs})=>{
    return (


<div>
  <ul>
   {blogs.map((blog,i)=> <li className="post-list-entry" key = {i}>
      <div className="post-list-entry-title">{blog.title}</div>
      <div className="post-list-entry-byline">{blog.author} {moment().startOf('hour').fromNow()} </div>
      <div className="stats-list-item-views">{blog.views}</div>
    </li>)}
  
  </ul>
</div>

    )
}

export default Admin