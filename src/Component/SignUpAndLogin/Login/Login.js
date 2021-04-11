import React, { useEffect, useState } from 'react';
import './Login.css'
import NavBar from '../../Shred/NavBar/NavBar';
import { NavLink } from 'react-router-dom';
import { Link } from '@material-ui/core';
import Shake from 'react-reveal/Shake';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import NumberInput from '../NumberInput/NumberInput';

const Login = () => {
    const [checkEvent, setCheckEvent] = useState(false)
    const [loginErr, setLoginErr] = useState('')
    const err = (errMassage) => {
        setLoginErr(errMassage);
    };

    return (
        <>
            <NavBar />
            <div className="d-flex justify-content-center">
                <div className="mt-5 login_container mx-2">
                    <h5 className="text-center login_title">Log in</h5>
                    <NumberInput err={err} />
                    <div>
                        <p className="login_dis">We'll call or text you to confirm your number Standard message and data rates apply.</p>
                        {
                            checkEvent ? <>
                                {
                                    loginErr ? <Shake>
                                        <h6 className="text-danger text-center">{loginErr} <FontAwesomeIcon icon={faExclamationTriangle} className="ml-2" /> </h6>
                                    </Shake> : ''
                                }
                            </> : ''
                        }
                        <button
                            onClick={() => setCheckEvent(true)}
                            F className="
                                border-0 px-2 py-3 
                                text-white 
                                rounded-lg w-100" id="search_btn"
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