import React, { Component } from 'react'
import axios from 'axios'
import moment from 'moment'
export default class Home extends Component {
       constructor(props) {
           super(props)
           this.state = {
               data:[]
           }
       }
     componentDidMount(){
         axios.get('/blog').then(res=>{
             this.setState({
                 data:res.data
                })
         }).catch(err=>{
             console.log(err)
         })
     }
    render() {
        console.log(this.state.data)
        const {data} = this.state
        return (
            <div className='home'>
                   <ul>
     {data.map((blog,i) => <li className="feed-list-item" key={i}>
        <div className="feed-list-item-title" onClick={() => changeView ("post",blog)}>{blog.title}</div>
        <div className="feed-list-item-byline"><span className="feed-list-item-byline-author">{blog.author}</span>{moment().startOf('hour').fromNow()}</div>
        <img src={blog.imageUrl} onClick={() => changeView ("post",blog)}  className="feed-list-item-image"/>
          <span className="feed-list-item-lede" >{blog.body} </span>
      </li>)}
    
    </ul>

                
            </div>
        )
    }
}

