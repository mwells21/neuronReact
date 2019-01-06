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
        <div className="AppContainer">
          <Profile></Profile>
          <Feed></Feed>
        </div>
      </div>
    );
  }
}

export default App;
