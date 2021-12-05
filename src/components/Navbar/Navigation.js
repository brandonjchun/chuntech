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
                        <Nav>
                            <div class="d-flex justify-content-between">
                                <div>

                                <Nav.Link style={{ color: '#200' }} href={"/"}>Home</Nav.Link>
                                </div>
                                <div>

                                <Nav.Link style={{ color: '#200' }}  href={"/about"}>About</Nav.Link>
                                </div>
                                <div>

                                <Nav.Link style={{ color: '#200' }}  href={"/features"}>Features</Nav.Link>
                                </div>
                                <div>

                                <Nav.Link style={{ color: '#200' }}  href={"/pricing"}>Pricing</Nav.Link>
                                </div>
                                <div>

                                <Nav.Link style={{ color: '#200' }}  href={"/contact"}>Contact</Nav.Link>
                                </div>
                            </div>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;