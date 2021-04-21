import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './HouseRulesAndPay.css'
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const HouseRulesAndPay = () => {
    const agree = sessionStorage.getItem('checkout')
    const agreeContinue = sessionStorage.getItem('continue');
    return (
        <Container>
            <Row className="py-5 d-flex justify-content-start">
                <div>
                    <NavLink className="rulesAndPay" to="/houseRules">1.Reviews house rules
                    <FontAwesomeIcon className="ml-3" icon={faChevronRight} />
                    </NavLink>
                </div>
                <div className="ml-md-4 pt-3 pt-md-0">
                    <NavLink className={agree ? "rulesAndPay" : "disabled_link"} to="/whoComing">2.Who's coming
                     <FontAwesomeIcon className="ml-3" icon={faChevronRight} />
                    </NavLink>
                </div>
                <div className="ml-md-4 pt-3 pt-md-0">
                    <NavLink className={agreeContinue ? "rulesAndPay" : "disabled_link"} to="/paymentGateWays">3.Confirm and pay
                    <FontAwesomeIcon className="ml-3" icon={faChevronRight} />
                    </NavLink>
                </div>
            </Row>
        </Container>
    );
};

export default HouseRulesAndPay;