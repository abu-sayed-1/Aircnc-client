import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import rowdra from "../../images/air-cnc-master/images/rowdra.jpg"
import Card from '../Shred/Card/Card';
import HouseRulesAndPay from '../Shred/HouseRulesAndPay/HouseRulesAndPay';

const WhoComing = () => {
    return (
        <Container className="mb-5 pb-5">
            <HouseRulesAndPay />
            <Row>
                <Col xs={6.5}>
                    <div className="py-5">
                        <h4 className="py-3 pb-2 fw_bolder">Traveling for work?</h4>
                        <h6 className=" self_check">Say hello to your host</h6>
                        <div className="d-flex pt-2">
                            <h5 className="pr-3 self_check">let Rowdra know a little about yourself why you're coming</h5>
                            <div className="pl-3">
                                <img className="img-fluid rounded-circle" src={rowdra} alt="" width="60px" />
                                <h5 className="self_check">Rowdra</h5>
                            </div>
                        </div>
                        <form>
                            <Form.Group>
                                <Form.Control as="textarea" rows={8} className="w-75" placeholder="Hello Rowdra! Can't wait to spend 4 night is your home" />
                            </Form.Group>
                            <NavLink to="/paymentGateWays">
                                <button
                                    onClick={() => sessionStorage.setItem('continue', true)}
                                    className="agree_btn px-4 py-2 text-white"
                                >
                                    Continue
                                </button>
                            </NavLink>
                        </form>
                    </div>
                </Col>
                <Col  className=" pl-5">
                    <Card />
                </Col>
            </Row>
        </Container>
    );
};

export default WhoComing;