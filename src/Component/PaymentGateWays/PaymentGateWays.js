import React, { useEffect, useState } from 'react';
import './PaymentGateWays.css';
import amex from '../../images/air-cnc-master/icons/credit-cards_amex.png';
import mastercard from '../../images/air-cnc-master/icons/credit-cards_mastercard.png';
import visaCard from '../../images/air-cnc-master/icons/credit-cards_visa.png';
import paypalImg from '../../images/air-cnc-master/icons/paypal.png';
import { Col, Container, Row } from 'react-bootstrap';
import { loadStripe } from "@stripe/stripe-js";
import { Elements, } from "@stripe/react-stripe-js";
import { toast } from 'react-toastify';
import HouseRulesAndPay from '../Shred/HouseRulesAndPay/HouseRulesAndPay';
import Paypal from './Paypal/Paypal';
import StripeCheckoutForm from './Stripe/StripeCheckoutForm';
import Card from '../Shred/Card/Card';
toast.configure();

const creditCardImages = [
    { id: 1, img: mastercard },
    { id: 2, img: visaCard },
    { id: 3, img: amex },
];

const PaymentGateWays = () => {
    const stripePromise = loadStripe("pk_test_51HaKX2FWzFyXdW5KjdYVQtPEcdPZOSLq0nvfi4MfePscvZAop5VwXrGvH9Z0XjenRtpUwNFsX07um8rLzI8yrrB600opOV9Hw9");
    const [checkout, setCheckout] = useState(
        {
            paypal: '',
            credit: ''
        }
    );

    return (
        <>
            <Container className="mb-5 pb-5">
                <HouseRulesAndPay />
                <h4 className="py-5">Payment Selection</h4>
                <Row>
                    <Col>
                        <div className="form-check card_content">
                            <Row>
                                <Col sm={12} md={6} lg={6} xl={6} xs={8}>
                                    <input onClick={
                                        () => setCheckout({ credit: "creditCard" })}
                                        className="form-check-input check_input" type="radio"
                                        name="inlineRadioOptions" id="inlineRadio1"
                                        value="option1" />
                                    <label className="form-check-label" htmlFor="inlineRadio1">
                                        <h4>Credit Card</h4>
                                    </label>
                                    <p className="text_colors mt-2">Safe money transfer using your bank account. Visa, Maestro, Discover, American Express</p>
                                </Col>
                                <Col sm={12} md={6} lg={6} xl={6}>
                                    <div className="pl-md-5">
                                        {
                                            creditCardImages.map(
                                                cardImage => <img className="pl-2" key={cardImage.id} src={cardImage.img} alt="" />
                                            )
                                        }
                                    </div>
                                </Col>
                            </Row>
                            <Elements stripe={stripePromise}>
                                <StripeCheckoutForm checkout={checkout} />
                            </Elements>
                        </div>
                        <Row className="p-5 mt-5 mb-5 paypal_content">
                            <Col sm={12} md={6} lg={6} xl={6} >
                                <div className="form-check">
                                    <input onClick={() => setCheckout({ paypal: "paypal" })} className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                    <label className="form-check-label" htmlFor="inlineRadio2">
                                        <h4>Paypal</h4>
                                    </label>
                                    <p className="pt-4 text_colors">You well be redirected to PayPal website to complete your purchase securely...</p>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={6} xl={6} xs={4}>
                                {checkout.paypal ? <Paypal />
                                    : <img src={paypalImg}
                                        width='200' className="d-flux justify-content-center" alt="" />}
                            </Col>
                        </Row>
                        <div className="paymentsAll_btn">
                            {
                                !checkout.credit && !checkout.paypal &&
                                <button className="agree_btn payments_btn px-3 py-1 text-white" onClick={() =>
                                    toast.error('Please Choose payment gateways !', { position: toast.POSITION.TOP_RIGHT })
                                }
                                >Continue to pay</button>
                            }

                            {
                                checkout.paypal && <button className="agree_btn payments_btn px-3 py-1 text-white" onClick={() =>
                                    toast.error('Please Chooses the Paypal Debit/Credit Card button !', { position: toast.POSITION.TOP_RIGHT })
                                }
                                >Continue to pay</button>
                            }
                        </div>
                    </Col>
                    <Col className=" pl-5">
                        <Card />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default PaymentGateWays;
