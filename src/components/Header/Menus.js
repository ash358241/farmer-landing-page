import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { motion } from "framer-motion";

const menuVariant = {
    hidden:{
        y: -50
    },
    visible:{
        y: 0,
        transition:{
            type: 'spring',
            stiffness: 120,
            // delay: .1
        }
    }
}

const Menus = () => {
    return (
        <motion.div
        variants={menuVariant}
        initial="hidden"
        animate="visible"
        >
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
        </motion.div>
    );
};

export default Menus;