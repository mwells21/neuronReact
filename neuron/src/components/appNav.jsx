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
            <Navbar color ="primary"color= "light" expand="md" className = "mb-5" >
                <NavbarBrand href="/">Hermelin Brain Tumor Center</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className = "ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/Patients/">PATIENTS</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Surgery/">SURGERY</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Pathology/">BANK</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Trials/">TRIALS</NavLink>
                        </NavItem>

                    </Nav>
                </Collapse>
            </Navbar>
        </div>
        );
    }
}

export default AppNav;