import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import axios from 'axios';
import Post from './components/Post.jsx';
import Feed from './components/Feed.jsx';
import Admin from './components/Admin.jsx';
import Create from './components/Create.jsx';
import Form from './components/Form.jsx'   



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      view: 'feed',
      blogs: [],
      blog: {},
      title: '',
      body: '',
      imageUrl: '',
      author: ''
    }
    this.changeView = this.changeView.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);


  }
  componentDidMount() {
    axios.get('/blog').then(({ data }) => {
      this.setState({
        blogs: data
      })
    })
      .catch(err => {
        console.log(err)
      })
  }
  handleChange(e) {
    this.setState({ [e.target.title]: e.target.value })
    
  }
  onSubmit() {
    const obj = {
      title: this.state.title,
      author: this.state.author,
      imageUrl: this.state.imageUrl,
      body: this.state.body,
      views: 0
    }
    axios.post('/blog', obj).then(() => console.log('add')).catch(err => console.log(err))
  }

  changeView(option, blog = {}) {
    this.setState({
      view: option,
      blog: blog
    });
  }

  renderView() {
    const { view } = this.state;
   

    if (view === 'feed') {
      return <Feed blogs={this.state.blogs} changeView={this.changeView} />
    } else if (view === 'post') {
      return <Post blog={this.state.blog} />
    } else if (view === 'admin') {
      return <Admin blogs={this.state.blogs} />
    }
    else if (view === 'create') {
      return <Create onSubmit={this.onSubmit} handleChange={this.handleChange} />;
    }
    else if (view === 'form') {
      return <Form data={this.state.data} changeView={this.changeView} />
    }
  }
  render() {
    return (
      <div>
        <div className="nav">
          <span className="logo"
            onClick={() => this.changeView('feed')}>
            JOURNAL
          </span>
          <span className={this.state.view === 'feed' ? 'nav-selected' : 'nav-unselected'}
            onClick={() => this.changeView('feed')}>
            BLOGS
          </span>
          <span className="nav-unselected" onClick={() => this.changeView('create')} >
            Write Your Blog
          </span>
          <span className="nav-unselected" onClick={() => this.changeView('admin')}>
            Best Blogs
          </span>
          <span className="nav-unselected" onClick={() => this.changeView('form')}>
            Create Account
          </span>
        </div>

        <div className="main">
          {this.renderView()}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
