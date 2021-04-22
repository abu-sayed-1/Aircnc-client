import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../../App';

const DivisionNavbar = () => {
    const { signUpAndLoggedInUser, setSignUpAndLoggedInUser } = useContext(UserContext);
    const userInfo = JSON.parse(sessionStorage.getItem("number"));
    console.log(userInfo, "[userInfo sessionStorage]")
    console.log(signUpAndLoggedInUser, "[signUpAndLoggedInUser]")
    const [gustsAndDates, setGustsAndDates] = useState(null);
    const destination_countryAndCity = JSON.parse(sessionStorage.getItem('countryAndCity'));
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
                        <Nav>
                            <Nav.Link className="mr-3 pt-3 btn_list" href="/">Help</Nav.Link>
                            {
                                (signUpAndLoggedInUser || userInfo) ? <>
                                    <div className="loggedUser_content px-3 pb-1">
                                        <h6 className="logged_user btn_list">
                                            <FontAwesomeIcon
                                                className="mr-2 logged_icon"
                                                icon={faUserCircle} />
                                            {userInfo.firstName} {userInfo.lastName}
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