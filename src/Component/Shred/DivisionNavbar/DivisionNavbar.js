import React, { useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const DivisionNavbar = () => {
    let country_dates_members = JSON.parse(sessionStorage.getItem('countryAndDatesAndMembers'));
    const id = sessionStorage.getItem("uniqueId");
    useEffect(() => {
        fetch(`http://localhost:4000/gustsAndDates${id}`)
            .then(res => res.json())
            .then(result => console.log(result))
    }, [id]);
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="border-bottom pl-md-5">
                <Container fluid className="pl-md-5">
                    <Navbar.Brand href="/" className="brand_name">Aircnc</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <h6 className="mr-3 pt-3 btn_list"> <span className="pr-3">{country_dates_members && country_dates_members[0].city} </span> Division,</h6>
                            <h6 className="mr-3 pt-3 btn_list">{country_dates_members && country_dates_members[0].country}</h6>
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