import React, { useContext, useEffect, useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import NumberInput from '../NumberInput/NumberInput';
import Shake from 'react-reveal/Shake';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import NavBar from '../../Shred/NavBar/NavBar';
import { NavLink, useHistory } from 'react-router-dom';
import { Link } from '@material-ui/core';
import { UserContext } from '../../../App';
import { Fade } from 'react-reveal';
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';

const pathNames = [{
    "home": "/",
    "houseRules": "/houseRules",
    "roomDetail": "/roomDetail",
    "selectRoom": "/division",
    "whoComing": "/whoComing",
}];

const SignUp = () => {
    const { signUpAndLoggedInUser, setSignUpAndLoggedInUser } = useContext(UserContext);
    const [verifySignUpErr, setVerifySignUpErr] = useState(false);
    const [checkoutVerifySignUp, setCheckoutVerifySignUp] = useState(false);
    const [number, setNumber] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [numberErr, setNumberErr] = useState(false);
    const [signUpErr, setSignUpErr] = useState('');
    const [token, setToken] = useState("");
    const [reCapError, setReCapError] = useState("");
    const [reCaptchaRes, setReCaptchaRes] = useState(false);
    console.log(token, "token");
    console.log(reCapError)
    const reCaptcha = useRef();
    const history = useHistory();
    const pageUrls = JSON.parse(sessionStorage.getItem("urls"));

    const homepage = pathNames[0].home === pageUrls.home;
    const selectRoomPage = pathNames[0].selectRoom === pageUrls.selectRoom;
    const roomDetailPage = pathNames[0].roomDetail === pageUrls.roomDetail;
    const houseRulesPage = pathNames[0].houseRules === pageUrls.houseRules;
    const whoComingPage = pathNames[0].whoComing === pageUrls.whoComing;

    useEffect(() => {
        if (isValid) {
            fetch(`http://localhost:4000/verifySignUp${number}`)
                .then(res => res.json())
                .then(result => {
                    if (result.length > 0) {
                        setVerifySignUpErr('The user has already registered with this number, try another number');
                        setCheckoutVerifySignUp(false);
                    }
                    if (result.length === 0) {
                        setCheckoutVerifySignUp(true);
                        setVerifySignUpErr(false);
                    }
                });
        };

    }, [isValid]);

    useEffect(() => {
        if (token) {
            setReCapError("");
            axios.post("http://localhost:4000/signUpWith/ReCaptcha", {
                token,
                email: "abusayedrakib66@gamil.com"
            }).then(res => {
                setReCaptchaRes(true);
            }).catch(({ response }) => {
                setReCapError(response.data.error);
                setReCaptchaRes(false);
            }).finally(() => {
                // reCaptcha.current.reset();
                // setToken("");
            })

        };
    }, [token]);

    const { register, errors, handleSubmit } = useForm();
    const onSubmit = data => {
        if (!token) {
            setReCapError("You must verify the captcha!");
            return;
        }
        if (checkoutVerifySignUp && reCaptchaRes) {
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
                    if (result) {
                        setSignUpAndLoggedInUser(signUpData.number)
                        sessionStorage.setItem("number", JSON.stringify([signUpData]));
                        if (whoComingPage &&
                            homepage &&
                            selectRoomPage &&
                            roomDetailPage &&
                            houseRulesPage) {
                            history.push("/paymentGateWays");
                        } else {
                            history.goBack();
                        }
                    }
                });
        };

    };

    const err = (errMassage) => {
        setSignUpErr(errMassage);
        setVerifySignUpErr(false);
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
            <div className="d-flex justify-content-center pb-5">
                <Fade right>
                    <div className="mt-5 loginAndSignUp_container mx-2">
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
                            {
                                verifySignUpErr ? <Shake>
                                    <h6 className="text-danger pb-2">{verifySignUpErr}</h6>
                                </Shake> : ''
                            }
                            <div className="my-3">
                                <ReCAPTCHA
                                    ref={reCaptcha}
                                    sitekey="6Lf2IcwaAAAAABGv7ePlL-tezK-MpMAVUSxruhzk"
                                    onChange={token => setToken(token)}
                                    onExpired={e => setToken("")}
                                />
                                {
                                    reCapError && <Shake>
                                        <h6 className="text-danger pb-2"> {reCapError}!</h6>
                                    </Shake>
                                }
                            </div>
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
                </Fade>
            </div>
        </>
    );
};

export default SignUp;