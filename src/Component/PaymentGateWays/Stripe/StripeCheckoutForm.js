import React from 'react';
import {
    CardCvcElement,
    CardExpiryElement,
    CardNumberElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js";
import { useHistory } from 'react-router-dom';
import axios from "axios";
import { toast } from 'react-toastify';
import { Col, Row } from 'react-bootstrap';

toast.configure()
const StripeCheckoutForm = ({ handleStripeProcess, total_amount, checkout }) => {
    const history = useHistory()
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardNumberElement, CardExpiryElement, CardCvcElement),
        });
        if (!checkout.credit) {
            toast.error('Please Choose Stripe Checkout!', { position: toast.POSITION.TOP_RIGHT });
        } else {
            toast.error(error && error.message, { position: toast.POSITION.TOP_RIGHT });
        }

        if (!error && checkout.credit) {
            handleStripeProcess(true);
            try {
                const { id } = paymentMethod;
                const response = await axios.post(
                    "http://localhost:4000/stripe/charge",
                    {
                        amount: total_amount + '00',
                        id: id,
                    }
                );

                if (response.data.success === true) {
                    handleStripeProcess(true)
                    toast.success('Payment successfully', { position: toast.POSITION.TOP_RIGHT });
                    setTimeout(() => { history.push('/') }, 5000);
                }
                if (response.data.success === false) {
                    handleStripeProcess(false)
                    toast.error(response.data.message, { position: toast.POSITION.TOP_RIGHT })
                }
            }
            catch (error) {
            }
        };
    };

    return (
        <div>
            <form onSubmit={handleSubmit} id="stripe_form">
                <label htmlFor="" className="input_name pt-5 mt-md-2">CARD NUMBER</label>
                <CardNumberElement className="payment_inputs m-auto" />
                <Row>
                    <Col sm={12} md={6} lg={6} xl={6} >
                        <label htmlFor="" className="input_name pt-4">EXPIRY DATE</label>
                        <CardExpiryElement className="payment_inputs" />
                    </Col>
                    <Col sm={12} md={6} lg={6} xl={6}>
                        <label htmlFor="" className="input_name pt-4">CVC CODE</label>
                        <CardCvcElement className="payment_inputs" />
                    </Col>
                </Row>
            </form>
        </div>
    );
};

export default StripeCheckoutForm;