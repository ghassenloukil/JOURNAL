import React from 'react';
import moment from 'moment'
const Feed = ({blogs ,changeView}) => {

  return (
    
     <div className="feed">
     <ul>
     {blogs.map((blog,i) => <li className="feed-list-item" key={i}>
        <div className="feed-list-item-title" onClick={() => changeView ("post",blog)}>{blog.title}</div>
        <div className="feed-list-item-byline"><span className="feed-list-item-byline-author">{blog.author}</span>{moment().startOf('hour').fromNow()}</div>
        <img src={blog.imageUrl} onClick={() => changeView ("post",blog)}  className="feed-list-item-image"/>
          <span className="feed-list-item-lede" >{blog.body} </span>
      </li>)}
    
    </ul>
  </div>
  )
  }

export default Feed;
