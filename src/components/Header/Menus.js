import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';

const Menus = () => {
    return (
        <div>
            <Navbar className="text-center mb-5" bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Spense</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#home">Business</Nav.Link>
                    <Nav.Link href="#link">Pricing</Nav.Link>
                    <Nav.Link href="#link">Features</Nav.Link>
                    <Nav.Link href="#link">Log In</Nav.Link>
                    <Button variant="dark">Get Started</Button>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Menus;