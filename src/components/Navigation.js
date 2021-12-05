import React, { Component } from 'react';
import { Nav, NavDropdown, Container, Form, FormControl, Button } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Routes,
    Route,
    Navlink,
    Link
} from "react-router-dom";
import { Navbar } from './NavigationElements';


class Navigation extends Component {
    render() {
        return (
            <div>
                <Navbar>
                    <Container>
                        <Nav className="me-auto">
                            <Nav.Link style={{ color: 'white' }} href={"/"}>Home</Nav.Link>
                            <Nav.Link style={{ color: 'white' }} href={"/about"}>About</Nav.Link>
                            <Nav.Link style={{ color: 'white' }} href={"/features"}>Features</Nav.Link>
                            <Nav.Link style={{ color: 'white' }} href={"/pricing"}>Pricing</Nav.Link>
                            <Nav.Link style={{ color: 'white' }} href={"/contact"}>Contact</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;