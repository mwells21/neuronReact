import React, { Component } from 'react';
import './App.css';
import AppNav from './components/appNav';
import Feed from './components/feed';
import Profile from './components/profile';
import PostForm from './components/postForm';
import { Container, Row, Col } from 'reactstrap';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupDropdown,
  Input,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
 } from 'reactstrap';


 
class App extends Component {
  constructor(props) {
    super(props);

    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.toggleSplit = this.toggleSplit.bind(this);
    this.state = {
      dropdownOpen: false,
      splitButtonOpen: false
    };
  }

  toggleDropDown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  toggleSplit() {
    this.setState({
      splitButtonOpen: !this.state.splitButtonOpen
    });
  }




  render() {
    return (
      <div className="App">
        <AppNav></AppNav>
        <Container>
          <Row>
            <Col sm={{ size: '2.5' }}>
              <Profile></Profile>
            </Col>
            <Col sm={{ size: '7', offset: 1 }}>
            <PostForm></PostForm>
            <br></br>
              <Feed></Feed>
            </Col>
          </Row>
        </Container> 
      </div>
    );
  }
}

export default App;
