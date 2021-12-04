import React, { Component } from 'react';
import { Navbar, Nav} from './HeaderElements';
import { NavDropdown, Container, Form, FormControl, Button } from 'react-bootstrap'

class Header extends Component {
    render() {
        return (
            <Navbar>
                <Container>
                    <br />
                    <Nav>
                        <div>
                            Plastic Extrusions and Metal Molding for Designers and Engineers                            Location, phone number, and contact
                        </div>
                    </Nav>
                </Container>
            </Navbar>
        );
    }
}

export default Header;