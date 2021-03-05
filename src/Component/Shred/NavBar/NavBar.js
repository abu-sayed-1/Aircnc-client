import React from 'react';
import './NavBar.css'
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="border">
                <Container fluid className="px-5">
                    <Navbar.Brand href="/" className="brand_name">Aircnc</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link className="mr-3 pt-3 btn_list" href="/">Host your home</Nav.Link>
                            <Nav.Link className="mr-3 pt-3 btn_list" href="/">Host your experience</Nav.Link>
                            <Nav.Link className="mr-3 pt-3 btn_list" href="/">Help</Nav.Link>
                            <Nav.Link className="mr-3 pt-3 btn_list" href="/">Log in</Nav.Link>
                            <Nav.Link className="mr-3" href="/"><button className="signUp_btn p-2 px-4">Sign up</button></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;