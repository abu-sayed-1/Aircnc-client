import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const DivisionNavbar = () => {
    const [gustsAndDates, setGustsAndDates] = useState(null);
    const userInfo = JSON.parse(sessionStorage.getItem("number"));
    const destination_countryAndCity = JSON.parse(sessionStorage.getItem('countryAndCity'));
    const country_city = destination_countryAndCity && destination_countryAndCity[0];
    const id = sessionStorage.getItem("uniqueId");
    useEffect(() => {
        fetch(`https://dcd-aircnc.herokuapp.com/gustsAndDates${id}`)
            .then(res => res.json())
            .then(result => {
                if (result.length > 0) {
                    setGustsAndDates(result[0]);
                    sessionStorage.setItem("gustsAndDates",
                        JSON.stringify(result));
                }
            });
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
                                <h6 className="mr-3 pt-3 btn_list"> <span className="pr-3">{country_city.city} </span> Division,</h6>
                                <h6 className="mr-3 pt-3 btn_list">{country_city.country}</h6>
                                {
                                    gustsAndDates && <div className="d-flex px-md-3">
                                        {
                                            gustsAndDates.startMonth === gustsAndDates.endMonth ?
                                                <div className="d-flex">
                                                    <h6 className="btn_list pt-3 mr-2">{gustsAndDates.startMonth}</h6>
                                                    <p className="btn_list pt-3 mr-3">{gustsAndDates.numericStartDay}-{gustsAndDates.numericEndDay}</p>
                                                </div> :
                                                <div className="d-flex">
                                                    <h6 className="btn_list pt-3 mr-2">{gustsAndDates.startMonth} {gustsAndDates.numericStartDay} -</h6>
                                                    <p className="btn_list pt-3 mr-3">{gustsAndDates.endMonth} {gustsAndDates.numericEndDay}</p>
                                                </div>
                                        }
                                        <p className="btn_list pt-3 mr-3">{gustsAndDates.gusts} Gusts</p>
                                    </div>
                                }
                            </div>
                        </div>
                        <Nav>
                            <Nav.Link className="mr-3 pt-3 btn_list" href="/">Help</Nav.Link>
                            {
                                userInfo ? <>
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
                                        <NavLink to="/signUp" className="mr-3">
                                            <button className="signUp_btn p-2 px-4 mt-2">Sign up</button>
                                        </NavLink>
                                    </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default DivisionNavbar;