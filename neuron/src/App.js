import React, { Component } from 'react';
import './App.css';
import AppNav from './components/appNav';
import Feed from './components/feed';
import Profile from './components/profile';
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
              <InputGroup>
                <InputGroupButtonDropdown addonType="prepend" isOpen={this.state.splitButtonOpen} toggle={this.toggleSplit}>
                  <Button outline>Post</Button>
                  <DropdownToggle split outline />
                  <DropdownMenu>
                    <DropdownItem disabled>Groups</DropdownItem>
                    <DropdownItem>Clinicians</DropdownItem>
                    <DropdownItem>Paitents</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>ALL</DropdownItem>
                  </DropdownMenu>
                </InputGroupButtonDropdown>
                <Input placeholder="and..." />
              </InputGroup>
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
