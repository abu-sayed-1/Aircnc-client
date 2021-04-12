import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import NumberInput from '../NumberInput/NumberInput';
import Shake from 'react-reveal/Shake';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import NavBar from '../../Shred/NavBar/NavBar';
import { NavLink } from 'react-router-dom';
import { Link } from '@material-ui/core';

const SignUp = () => {
    const [number, setNumber] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [numberErr, setNumberErr] = useState(false);
    const [signUpErr, setSignUpErr] = useState('');
    const { register, errors, handleSubmit } = useForm();
    const onSubmit = data => {
        if (isValid) {
            const signUpData = {
                firstName: data.firstName,
                lastName: data.lastName,
                number: number
            };
            fetch('http://localhost:4000/signUp', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(signUpData)
            })
                .then(result => {
                    console.log(result)
                });
        }
    }
    const err = (errMassage) => {
        setSignUpErr(errMassage);
    };

    const numberTrue = (isNumberValid) => {
        setIsValid(isNumberValid);
    };

    const phoneNumber = (numb) => {
        setNumber(numb);
    }
    return (
        <>
            <NavBar />
            <div className="d-flex justify-content-center">
                <>
                    <div className="mt-5 login_container mx-2">
                        <h5 className="text-center login_title">Sign up</h5>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Control
                                ref={register({
                                    required: true,
                                    minLength: 2
                                })}
                                type="text" name="firstName"
                                className="PhoneInputInput signUp_input"
                                placeholder="Enter Your First Name"
                            />
                            {errors.firstName?.type === "required" && <Shake> <h6 className="text-danger">First Name is required <FontAwesomeIcon icon={faExclamationTriangle} className="ml-2" /></h6></Shake>}
                            {errors.firstName?.type === "minLength" && <Shake> <h6 className="text-danger">Minimum Two Characters <FontAwesomeIcon icon={faExclamationTriangle} className="ml-2" /></h6></Shake>}
                            <Form.Control
                                ref={register({
                                    required: true,
                                    minLength: 2
                                })}
                                type="text" name="lastName"
                                className="PhoneInputInput signUp_input"
                                placeholder="Enter Your last Name"
                            />
                            {errors.lastName?.type === "required" && <Shake><h6 className="text-danger">Last Name is required <FontAwesomeIcon icon={faExclamationTriangle} className="ml-2" /></h6></Shake>}
                            {errors.lastName?.type === "minLength" && <Shake> <h6 className="text-danger">Minimum Two Characters <FontAwesomeIcon icon={faExclamationTriangle} className="ml-2" /></h6></Shake>}
                            <NumberInput err={err} numberTrue={numberTrue} phoneNumber={phoneNumber} />
                            {
                                numberErr && <>
                                    {
                                        signUpErr ? <Shake>
                                            <h6 className="text-danger">{signUpErr} <FontAwesomeIcon icon={faExclamationTriangle} className="ml-2" /> </h6>
                                        </Shake> : ''
                                    }
                                </>

                            }
                            <p className="login_dis">We'll call or text you to confirm your number Standard message and data rates apply.</p>
                            <button type="submit" className="
                                    border-0 px-2 py-3 
                                    text-white 
                                    rounded-lg w-100" id="search_btn"
                                onClick={() => setNumberErr(true)}
                            >
                                Continue
                            </button>
                            <div className="d-flex justify-content-center">
                                <div className="pt-4">
                                    <label htmlFor="" className="login_dis">have an account?</label>
                                    <NavLink to="/login">
                                        <Link className="signUp_link pl-2">Login</Link>
                                    </NavLink>
                                </div>
                            </div>
                        </Form>
                    </div>
                </>
            </div>
        </>
    );
};

export default SignUp;