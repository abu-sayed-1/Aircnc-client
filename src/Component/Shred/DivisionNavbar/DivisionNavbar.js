import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const DivisionNavbar = () => {
    const [gustsAndDates, setGustsAndDates] = useState(null);
    const destination_countryAndCity  = JSON.parse(sessionStorage.getItem('countryAndCity'));
    const id = sessionStorage.getItem("uniqueId");
    useEffect(() => {
        fetch(`http://localhost:4000/gustsAndDates${id}`)
            .then(res => res.json())
            .then(result => {
                setGustsAndDates(result);
                sessionStorage.setItem("gustsAndDates", JSON.stringify(result && result));
            })
    }, [id]);
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="border-bottom pl-md-5">
                <Container fluid className="pl-md-5">
                    <Navbar.Brand href="/" className="brand_name">Aircnc</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <div className="shadow-sm rounded-lg px-md-5 ml-lg-auto mr-lg-auto">
                            <div className="d-md-flex">
                                <h6 className="mr-3 pt-3 btn_list"> <span className="pr-3">{destination_countryAndCity && destination_countryAndCity[0].city} </span> Division,</h6>
                                <h6 className="mr-3 pt-3 btn_list">{destination_countryAndCity && destination_countryAndCity[0].country}</h6>
                                {
                                    gustsAndDates && <div className="d-flex px-md-3">
                                        {
                                            gustsAndDates[0].startMonth === gustsAndDates[0].endMonth ?
                                                <div className="d-flex">
                                                    <h6 className="btn_list pt-3 mr-2">{gustsAndDates[0].startMonth}</h6>
                                                    <p className="btn_list pt-3 mr-3">{gustsAndDates[0].numericStartDay}-{gustsAndDates[0].numericEndDay}</p>
                                                </div> :
                                                <div className="d-flex">
                                                    <h6 className="btn_list pt-3 mr-2">{gustsAndDates[0].startMonth} {gustsAndDates[0].numericStartDay} -</h6>
                                                    <p className="btn_list pt-3 mr-3">{gustsAndDates[0].endMonth} {gustsAndDates[0].numericEndDay}</p>
                                                </div>
                                        }
                                        <p className="btn_list pt-3 mr-3">{gustsAndDates[0].gusts} Gusts</p>
                                    </div>

                                }
                            </div>
                        </div>
                        <Nav className="">
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