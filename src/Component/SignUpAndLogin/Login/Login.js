import React, { useEffect, useState } from 'react';
import './Login.css'
import NavBar from '../../Shred/NavBar/NavBar';
import PhoneInput, { formatPhoneNumber, formatPhoneNumberIntl, isValidPhoneNumber } from 'react-phone-number-input';
import { NavLink } from 'react-router-dom';
import { Link } from '@material-ui/core';
import Shake from 'react-reveal/Shake';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const Login = () => {

    const [value, setValue] = useState(null);
    const [showErr, setShowErr] = useState('');
    const verifyNumber = value && isValidPhoneNumber(value)
    useEffect(() => {
        if (verifyNumber && true) {
            setShowErr('');
        }
    }, [verifyNumber]);

    const func = () => {
        const checkoutValue = value ? (isValidPhoneNumber(value) ?
            undefined : setShowErr('Invalid Phone Number')) : setShowErr('Number is required');
        const isValid = value && isValidPhoneNumber(value) ? true : false;
        if (isValid) {
            const number = value && formatPhoneNumberIntl(value);
            // fetch(`http://localhost:4000/verifyNumber${number}`)
            //     .then(res => res.json())
            //     .then(result => console.log(result));
        }
    };


    return (
        <>
            <NavBar />
            <div className="d-flex justify-content-center">
                <div className="mt-5 login_container mx-2">
                    <h5 className="text-center login_title">Log in</h5>
                    <div>
                        <PhoneInput
                            placeholder="enter phone number"
                            international
                            withCountryCallingCode
                            value={value}
                            onChange={setValue}
                        />
                    </div>
                    <div>
                        <p className="login_dis">We'll call or text you to confirm your number Standard message and data rates apply.</p>
                        {
                            showErr ? <Shake>
                                <h6 className="text-danger text-center">{showErr} <FontAwesomeIcon icon={faExclamationTriangle} className="ml-2" /> </h6>
                            </Shake> : ''
                        }
                        <button
                            className="
                                border-0 px-2 py-3 
                                text-white 
                                rounded-lg w-100" id="search_btn"
                            onClick={() => func()}
                        >
                            Continue
                            </button>
                        <div className="d-flex justify-content-center">
                            <div className="pt-4">
                                <label htmlFor="" className="login_dis">Don't have an account?</label>
                                <NavLink to="/signUp">
                                    <Link className="signUp_link"> Sign up</Link>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;