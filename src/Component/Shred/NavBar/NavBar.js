import React from 'react';
import './NavBar.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const userInfo = JSON.parse(sessionStorage.getItem("number"));
    console.log(userInfo)
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
                            {
                                userInfo.length > 0 ? <>
                                    <div className="loggedUser_content px-3 pb-1">
                                        <h6 className="logged_user btn_list">
                                            <FontAwesomeIcon
                                                className="mr-2 logged_icon"
                                                icon={faUserCircle} />
                                            {userInfo[0].firstName} {userInfo[0].lastName}
                                        </h6>
                                    </div>
                                </> :
                                    <>
                                        <NavLink to="/login" className="mr-3 pt-3 btn_list">Log in</NavLink>
                                        <NavLink to="/signUp" className="mr-3"><button className="signUp_btn p-2 px-4">Sign up</button></NavLink>
                                    </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;