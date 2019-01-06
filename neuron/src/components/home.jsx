import React, { Component } from 'react';

class Home extends Component {
    render() { 
        return (
            <div className="AppContainer">
                <Profile></Profile>
                <Feed></Feed>
            </div>
          );
    }
}
 
export default Home;