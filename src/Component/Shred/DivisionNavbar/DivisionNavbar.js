import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const DivisionNavbar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="border-bottom pl-md-5">
                <Container fluid className="pl-md-5">
                    <Navbar.Brand href="/" className="brand_name">Aircnc</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <h6 className="mr-3 pt-3 btn_list">empty</h6>
                            <h6 className="mr-3 pt-3 btn_list">empty</h6>
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

export default DivisionNavbar;