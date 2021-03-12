import React from 'react';
import $ from 'jquery';
import Form from './Form.jsx'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data : [],
      showTable:false
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
      <th>Email</th>
      <th>Password</th>
    </tr>
    </thead>
    <tbody>
  {this.state.data.map((e,i)=><tr key={i}><td>{e.firstName}</td><td>{e.lastName}</td><td>{e.email}</td><td>{e.password}</td></tr>)}
    </tbody>
  </table>
return (
 
  <div> <Form/>

  {(this.state.showTable)? table : ''}
  </div>
)
  }
}

export default App;
