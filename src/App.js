import React, { Component } from 'react';
import './App.css'
import Header from './components/header';
import Sidebar from './components/sideBar';
import Post from './components/post';
import Feed from './components/feed';
import Groupchat from './components/groupchat'

class App extends Component{
  render() {
      return (
          <div>
            <Header />
            <div className="container context">
              <div className="row">
                <div className="col-2 sidebar">
                  <Sidebar />
                </div>
                <div className="col-8">
                  <Post />
                  <Feed />
                </div>
                <div className="col-2">
                  <Groupchat />
                </div>
              </div>
            </div>
          </div>
      );
  }
}

export default App;
