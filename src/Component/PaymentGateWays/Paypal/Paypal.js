import React, { useEffect } from 'react';
import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
toast.configure()
const Paypal = ({ total_amount }) => {
    const paypal = useRef();
    const history = useHistory();
    useEffect(() => {
        window.paypal
            .Buttons({
                createOrder: (data, actions, err) => {
                    return actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [
                            {
                                description: "Cool looking table",
                                amount: {
                                    currency_code: "USD",
                                    value: total_amount,
                                },
                            },
                        ],
                    });
                },
                onApprove: async (data, actions) => {
                    const order = await actions.order.capture();
                    if (order) {
                        toast.success('Payment successfully', { position: toast.POSITION.TOP_RIGHT });
                        setTimeout(() => { history.push('/') }, 5000);
                    }
                },
                onError: (err) => {
                    console.log(err.message)
                }
            })
            .render(paypal.current)
    }, [])
    return (
        <div>
            <div ref={paypal}></div>
        </div>
    );
};

export default Paypal;