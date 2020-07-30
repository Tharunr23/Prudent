import React, { Component } from 'react';
import {Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Nav} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            isNavOpen: false,
        }

        this.navToggler = this.navToggler.bind(this);
    }

    navToggler()
    {
        this.setState({
            isNavOpen:true
        })
        
    }

    render()
    {
        return(
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarBrand href="/">Prudent AI</NavbarBrand>
                        <NavbarToggler onClick={this.navToggler} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="ml-auto">
                                <NavItem>
                                    <NavLink className="nav-link" to="/upload"><i className="fa fa-list fa-lg" > Upload File</i></NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default Header;

