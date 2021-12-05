import React, { Component } from 'react';
import { Navbar } from './HeaderElements';
import { Nav, NavDropdown, Container, Form, FormControl, Button } from 'react-bootstrap'

class Header extends Component {
    render() {
        return (
            <Navbar>
                <Container>
                    <div class="d-flex justify-content-between">
                            <Nav>
                                <Nav.Link style={{ color: 'white' }} href={"/"}>
                                    Plastic Extrusions and Metal Molding for Designers and Engineers
                            </Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link style={{ color: 'white' }} href={"https://www.google.com/maps"}>16861 Spring Field Ave, CA 92833</Nav.Link>
                                <Nav.Link style={{ color: 'white' }} href={"/"}>714-321-4358</Nav.Link>
                                <Nav.Link style={{ color: 'white' }} href={"/contact"}>Contact</Nav.Link>
                            </Nav>
                    </div>
                </Container>
            </Navbar >
        );
    }
}

export default Header;

/*
For justification with left, right, center, whatever
https://getbootstrap.com/docs/5.1/utilities/flex/
*/