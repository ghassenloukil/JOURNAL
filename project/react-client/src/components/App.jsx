import React from 'react';
import ReactDOM from 'react-dom';
import Blogs from './Blogs.jsx'
import Form from './Form.jsx'
import Home from './Home.jsx'
class App extends React.Component {
    constructor(props){
        super(props)
        this.state={
            toggle:'form'
        }
        this.changeView=this.changeView.bind(this)
    }
    changeView(option){
        this.setState({
            toggle:option
        })
    }
    render(){
        const {toggle}=this.state
        return (
            <div>
                <div className="nav">
                <span className={toggle==='form'
                     ? 'nav-selected'
                     : 'nav-unselected'}
                     onClick={()=>this.changeView('form')}>
                     SIGNUP
                     </span>
                    <span className={toggle==='blogs'
                    ?'nav-selected'
                     :'nav-unselected'}
                     onClick={()=>this.changeView('blogs')}>
                         Home
                     </span>
                     <span className={toggle==='home'
                     ? 'nav-selected'
                     : 'nav-unselected'}
                     onClick={()=>this.changeView('home')}>
                     Blogs
                     </span>
                </div>
                <div className='main'>
                    {toggle==='form'
                    ? <Form/>
                    :toggle==='home'
                    ?<Home />
                    :<Blogs/>
                    }
                </div>
                
            </div>
        )
    }
}
export default App