import { faPaw, faBabyCarriage, faSmokingBan, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import noAlcohol from '../../images/air-cnc-master/images/download.jfif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from '@material-ui/core';
import "./HouseRules.css"
import HouseRulesAndPay from '../Shred/HouseRulesAndPay/HouseRulesAndPay';
import { NavLink } from 'react-router-dom';
import Card from '../Shred/Card/Card';

const HouseRules = () => {
    const [readMore, setReadMore] = useState(null);
    const gustsAndDates = JSON.parse(sessionStorage.getItem('gustsAndDates'));
    const city = JSON.parse(sessionStorage.getItem('countryAndCity'));
    return (
        <Container className="mb-5 pb-5">
            <HouseRulesAndPay />
            <Row>
                <Col sm={12} md={12} lg={6} xl={6}>
                    <>
                        <div className="border_bottom">
                            <h1 className="fw_bolder">Review house rules</h1>
                            <h5 className="pt-2">{gustsAndDates && gustsAndDates[0].days} nights in {city && city[0].city}</h5>
                            <div className="d-flex py-3">
                                <div className="d-flex">
                                    <div className="px-2 h-75 rounded months_dates">
                                        <h6 className="mb-0 pt-1">{gustsAndDates[0].startMonth}</h6>
                                        <h6 className="pl-1">{gustsAndDates[0].numericStartDay}</h6>
                                    </div>
                                    <div className="pl-3">
                                        <p className="mb-0 checkInAnd_checkout">check-in</p>
                                        <p className='checkInAnd_checkout'>after 12:00 PM</p>
                                    </div>
                                </div>
                                <div className="d-flex pl-5 ml-2">
                                    <div className="px-2 h-75 rounded months_dates">
                                        <h6 className="mb-0 pt-1">{gustsAndDates[0].endMonth}</h6>
                                        <h6 className="mb-0 pl-1">{gustsAndDates[0].numericEndDay}</h6>
                                    </div>
                                    <div className="pl-3">
                                        <p className="mb-0 checkInAnd_checkout">checkout</p>
                                        <p className='checkInAnd_checkout'>11:00 am</p>
                                    </div>
                                </div>
                            </div>
                            <h5 className='self_check py-2 pb-4'> self check-in with building staff</h5>
                        </div>
                        <h3 className="pt-3 pb-4 fw_bolder"> Things to keep in mind</h3>
                        <div className="d-flex mt-3">
                            <div className="p-2 border">
                                <FontAwesomeIcon icon={faBabyCarriage} />
                            </div>
                            <h6 className="pl-3 align-self-center">Suitable for children and infants</h6>
                        </div>
                        <div className="d-flex mt-3">
                            <div className="p-2 border">
                                <FontAwesomeIcon icon={faPaw} />
                            </div>
                            <h6 className="pl-3 align-self-center">Pest allowed</h6>
                        </div>
                        <div className="d-flex mt-3">
                            <div className="p-1 border">
                                <img width="25px" className="img-fluid" src={noAlcohol} alt="" />
                            </div>
                            <h6 className="pl-3 align-self-center">No parties or events</h6>
                        </div>
                        <div className="d-flex mt-3 pb-4">
                            <div className="p-2 border">
                                <FontAwesomeIcon icon={faSmokingBan} />
                            </div>
                            <h6 className="pl-3 align-self-center align-self-center">No Smoking</h6>
                        </div>

                        <Link
                            className="read_more"
                            style={{ cursor: 'pointer' }}
                            onClick={() => setReadMore(!readMore)}
                        >
                            Read more
                           {
                                readMore ? <FontAwesomeIcon className="ml-2 mt-2" icon={faChevronUp} /> : <FontAwesomeIcon className="ml-2 mt-2" icon={faChevronDown} />
                            }
                        </Link>
                        {
                            readMore &&
                            <div>
                                <div className="d-flex mt-3">
                                    <h6 className="pl-3 align-self-center">...</h6>
                                </div>
                                <div className="d-flex mt-3">
                                    <h6 className="pl-3 align-self-center">...</h6>
                                </div>
                            </div>
                        }
                        <br />
                        <NavLink to="/whoComing">
                            <button onClick={() => sessionStorage.setItem('checkout', true)}
                                className="px-4 py-3 mt-5 agree_btn text-white"
                            >Agree and continue
                            </button>
                        </NavLink>
                    </>
                </Col>
                <Col sm={12} md={12} lg={6} xl={6}>
                    <Card />
                </Col>
            </Row>
        </Container>
    );
};

export default HouseRules;