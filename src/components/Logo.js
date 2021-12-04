import React, { Component } from 'react';
import { Navbar, Nav, NavLink, NavDropdown, Container, Form, FormControl, Button } from 'react-bootstrap'

class Logo extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Navbar.Brand href={"/"}>Chun Tech Innovations</Navbar.Brand>
                </Container>
            </div>
        );
    }
}

export default Logo;