// import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
// import { NavLink } from 'react-router-dom';
import rowdra from "../../images/air-cnc-master/images/rowdra.jpg"
import Card from '../Shred/Card/Card';
import HouseRulesAndPay from '../Shred/HouseRulesAndPay/HouseRulesAndPay';
import { Fade, Shake } from "react-reveal";
import { useHistory, useLocation } from 'react-router';

const WhoComing = () => {
    const history = useHistory();
    const location = useLocation();
    const previousUrls = JSON.parse(sessionStorage.getItem('urls'));
    sessionStorage.setItem("urls", JSON.stringify({
        "home": previousUrls.home,
        "selectRoom": previousUrls.selectRoom,
        "roomDetail": previousUrls.roomDetail,
        "houseRules": previousUrls.houseRules,
        "whoComing": location.pathname
    }))

    const { register, errors, handleSubmit } = useForm();
    const onSubmit = (data) => {
        fetch('http://localhost:4000/WhyComing', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => {
                if (res) {
                    sessionStorage.setItem('continue', true)
                    history.push('/paymentGateWays');
                }
            })
    };
    return (
        <Container className="mb-5 pb-5">
            <HouseRulesAndPay />
            <Row>
                <Col sm={12} md={12} lg={6} xl={6}>
                    <Fade top>
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
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <Form.Control
                                    ref={register({
                                        required: true,
                                        minLength: 6
                                    })}
                                    as="textarea"
                                    rows={8} className="w-75"
                                    name="whyComing"
                                    placeholder="Hello Rowdra! Can't wait to spend 4 night is your home"
                                />
                                {/* {errors.whyComing?.type === "required" && <Shake> <h6 className="text-danger">First Name is required <FontAwesomeIcon icon={faExclamationTriangle} className="ml-2" /></h6></Shake>} */}
                                {/* {errors.whyComing?.type === "required" && <Shake> <h6 className="text-danger">feld is required <FontAwesomeIcon icon={faExclamationTriangle} className="ml-2" /></h6></Shake>} */}
                                <button className="agree_btn px-4 py-2 mt-3 text-white">
                                    Continue
                            </button>
                            </Form>
                        </div>
                    </Fade>
                </Col>
                <Col sm={12} md={12} lg={6} xl={6}>
                    <Fade bottom>
                        <Card />
                    </Fade>
                </Col>
            </Row>
        </Container>
    );
};

export default WhoComing;