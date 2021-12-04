import React, { Component } from 'react';
import { Navbar } from './HeaderElements';
import { Nav, NavDropdown, Container, Form, FormControl, Button } from 'react-bootstrap'

class Header extends Component {
    render() {
        return (
            <Navbar>
                <Container>
                    <br />
                    <div class="d-flex justify-content-between">
                        <Nav>
                            <div>
                                Plastic Extrusions and Metal Molding for Designers and Engineers
                            </div>
                        </Nav>
                        <Nav>
                            <div>
                                Location, phone number, and contact
                            </div>
                        </Nav>
                    </div>
                </Container>
            </Navbar>
        );
    }
}

export default Header;