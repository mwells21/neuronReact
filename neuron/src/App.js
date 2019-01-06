import React, { Component } from 'react';
import './App.css';
import AppNav from './components/appNav';
import Feed from './components/feed';
import Profile from './components/profile';

class App extends Component {
  render() {
    return (
      <div className="App">
      <AppNav></AppNav>
          <Profile></Profile>
          <Feed></Feed>
      </div>
    );
  }
}

export default App;
