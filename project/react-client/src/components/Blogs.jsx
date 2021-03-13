import React from 'react';
import $ from 'jquery';
import Form from './Form.jsx'


class Blogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data : [],
      showTable:true
    }

  } 
  componentDidMount () {
    $.ajax({
      url : '/journals',
      method : 'GET',
      contentType : 'application/json',
      success :  (data)=> {
        this.setState({data: data})
      }
    }) 
  }

  render() {
    console.log(this.state.data)
    var table =   <table>
    <thead>
      <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Feed Back</th>
      
    </tr>
    </thead>
    <tbody>
  {this.state.data.map((e,i)=><tr key={i}><td>{e.firstName}</td><td>{e.lastName}</td><td>{e.email}</td></tr>)}
    </tbody>
  </table>
return (
 
  <div className="blogs">

  {(this.state.showTable)? table : ''}
  </div>
)
  }
}

export default Blogs;
