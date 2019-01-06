import React, { Component } from 'react';
import{
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem 
} from 'reactstrap';

class AppNav extends Component {
    state = {
        isOpen: false
    }
    
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render(){
        return(
            <div>
            <Navbar color ="primary" dark expand="md" className = "mb-5" >
                <NavbarBrand href="/">Hermelin Brain Tumor Center</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className = "ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/Patients/">PATIENTS</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Pathology/">PATHOLOGY</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Surgery/">SURGERY</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
        );
    }
}

export default AppNav;