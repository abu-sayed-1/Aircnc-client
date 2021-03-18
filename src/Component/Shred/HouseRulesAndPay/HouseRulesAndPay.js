import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './HouseRulesAndPay.css'
import { Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const HouseRulesAndPay = () => {
    const agree = sessionStorage.getItem('checkout')
    const agreeContinue = sessionStorage.getItem('continue');
    return (
        <>
            <Row className="py-5">
                <Col xs={4.8} className="pr-2">
                    <NavLink className="rulesAndPay" to="/houseRules">1.Reviews house rules
                    <FontAwesomeIcon className="ml-3" icon={faChevronRight} />
                    </NavLink>
                </Col>
                <Col xs={3.2} className="pl-3 text-center">
                    <NavLink className={agree ? "rulesAndPay" : "disabled_link"} to="/whoComing">2.Who's coming
                     <FontAwesomeIcon className="ml-3" icon={faChevronRight} />
                    </NavLink>
                </Col>
                <Col xs={4} className="pl-3 pr-0">
                    <NavLink className={agreeContinue ? "rulesAndPay" : "disabled_link"} to="/paymentGateWays">3.Confirm and pay
                    <FontAwesomeIcon className="ml-3" icon={faChevronRight} />
                    </NavLink>
                </Col>
            </Row>
        </>
    );
};

export default HouseRulesAndPay;