import React from 'react';
import $ from 'jquery' ;
import Insert from './InsertConfirmation.jsx';
import axios from 'axios'

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [],
            firstName: '',
            lastName: '',
            Email_Adress: '',
            password: '',
            display_Alert: false,
            data:{type :  'form'}
        }
    }
    componentDidMount() {
        axios.get('/journals').then(({ data }) => {
          this.setState({
            users: data
          })
        })
          .catch(err => {
            console.log(err)
          })
      }
    check() {

        const { firstName, lastName, Email_Adress, password, display_Alert } = this.state;
        
        

        if (firstName == '' || lastName == '' || Email_Adress == '' ||  password=='' )return this.setState({ display_Alert: true })
        if (Email_Adress.indexOf('@') == -1 || Email_Adress.indexOf('.', Email_Adress.indexOf('@') + 2) == -1 || Email_Adress.indexOf('.', Email_Adress.indexOf('@')) == Email_Adress.length - 1) return this.setState({ display_Alert: true })
        this.setState({ display_Alert: false })
        $.ajax({
           url : '/journals',
           method : 'POST',
           contentType : 'application/json',
           data : JSON.stringify ({firstName , lastName , Email_Adress , password}) ,
           success : (data)=>{
               this.setState({data:data})
            }
        })
    }

    
        
        
      

    render() {
       if (this.state.data.type=='inserted')
       {return( <form><Insert user= {this.state.data}/></form> )}
   
       else {

        return (
            <div>
                <div className="form">

                <form> {(this.state.display_Alert) ? <div className='Alert'>Fill Again <br /> </div > : <div></div>}
                    <label>firstName</label><br />

                    <input onChange={(event) => this.setState({ firstName: event.target.value })} type="text" name="firstName" /><br />
                    <label>LastName</label><br />
                    <input onChange={(event) => this.setState({ lastName: event.target.value })} type="text" name="lastName" /><br />
                    <label>Email Adress</label><br />
                    <input onChange={(event) => this.setState({ Email_Adress: event.target.value })} type="text" name="Email_Adress" /><br />
                    <label>Password</label><br />
                    <input onChange={(event) => this.setState({ password:event.target.value })} type="password" name="password" /><br />
                    
                    <button type="button" onClick={() => this.check(alert('welcome with us you will receive an e-mail of confirmation'))}>submit </button>
                    <button id='button1' type="button" onClick={() =>location.reload()}>Refresh</button>
                   
                </form>
                </div>
            </div>

        )
    }
}
}

export default Form;