import React, { Component } from 'react';
import { Navbar, Nav, NavLink, NavDropdown, Container, Form, FormControl, Button } from 'react-bootstrap'
import {
    LogoContainer,
    LogoText,
    LogoImage
} from './LogoElements.js';
import LogoPicture from './logo.jpeg'


class Logo extends Component {
    render() {
        return (
            <Container>
                <LogoContainer>
                    <div class="d-flex justify-content-between">
                        <img
                            className="img-responsive"
                            src={LogoPicture}
                            alt="LogoSubstitute"
                            to={"/"}
                            style={{
                                width: 150,
                                display: 'flex',
                                backgroundColor: "white",
                                verticalAlign: "ms"
                            }}
                        />
                        <LogoText>
                            <br/>
                            <br/>
                            Call us today at 714-321-4358 to get a quote on 
                            <br/>
                            your custom plastic extrusion or metal molding!!
                        </LogoText>
                    </div>

                </LogoContainer>
            </Container>
        );
    }
}

export default Logo;