import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Container, Form, FormControl, Button } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Routes,
    Route,
    Navlink,
    Link
} from "react-router-dom";
class Navigation extends Component {
    render() {
        return (
            <div>
                <Navbar variant="black">
                    <Container>
                        <Nav className="me-auto">
                            <Nav.Link href={"/"}>Home</Nav.Link>
                            <Nav.Link href={"/about"}>About</Nav.Link>
                            <Nav.Link href={"/features"}>Features</Nav.Link>
                            <Nav.Link href={"/pricing"}>Pricing</Nav.Link>
                            <Nav.Link href={"/contact"}>Contact</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;