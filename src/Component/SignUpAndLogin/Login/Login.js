import React, { useContext, useEffect, useState } from 'react';
import './Login.css'
import NavBar from '../../Shred/NavBar/NavBar';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { Link } from '@material-ui/core';
import Shake from 'react-reveal/Shake';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import NumberInput from '../NumberInput/NumberInput';
import { UserContext } from '../../../App';

const pathName = [{
    "home": "/",
    "houseRules": "/houseRules",
    "roomDetail": "/roomDetail",
    "selectRoom": "/division",
    "whoComing": "/whoComing",
}];

const Login = () => {
    const { signUpAndLoggedInUser, setSignUpAndLoggedInUser } = useContext(UserContext);
    const [verifyLoginNumber, setVerifyLoginNumber] = useState(false);
    const [loginNumber, setLoginNumber] = useState(false);
    const [checkEvent, setCheckEvent] = useState(false);
    const [loginErr, setLoginErr] = useState('');
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { form: { pathname: "/" } };
    let pageUrls = JSON.parse(sessionStorage.getItem("urls"));

    // if (pathName.every(r => pageUrls.home && pageUrls.selectRoom && pageUrls.roomDetail && pageUrls.houseRules && pageUrls.whoComing.includes(r.home, r.selectRoom, r.roomDetail, r.houseRules, r.whoComing))) {
    //     // let che = pageUrls.home && pageUrls.selectRoom && pageUrls.roomDetail && pageUrls.houseRules && pageUrls.whoComing == pathName.home && pathName.selectRoom && pathName.roomDetail && pathName.houseRules && pathName.whoComing;
    //     //item.home && item.selectRoom && item.roomDetail && item.houseRules &&   pageUrls.home && pageUrls.selectRoom && pageUrls.roomDetail && pageUrls.houseRules && 
    //     // let chkk = pathName.some(item => item.houseRules == pageUrls.houseRules);
    //     console.log('status 200')
    // } else {
    //     console.log("status not found")
    // };

    // if (ar1.every(r => ar2.includes(r))) {
    //     console.log('Found all of', ar1, 'in', ar2);
    // } else {
    //     console.log('Did not find all of', ar1, 'in', ar2);
    // }

    const homepage = pathName[0].home === pageUrls.home;
    const selectRoomPage = pathName[0].selectRoom === pageUrls.selectRoom;
    const roomDetailPage = pathName[0].roomDetail === pageUrls.roomDetail;
    const houseRulesPage = pathName[0].houseRules === pageUrls.houseRules;
    const whoComingPage = pathName[0].whoComing === pageUrls.whoComing;

    const err = (errMassage) => {
        setLoginErr(errMassage);
    };
    const phoneNumber = (number) => {
        setLoginNumber(number);
    };

    useEffect(() => {
        if (loginNumber !== false) {
            setVerifyLoginNumber('');
        }
    }, [loginNumber])


    const handleLogin = () => {
        setCheckEvent(true);
        if (loginNumber) {
            fetch(`http://localhost:4000/verifyLoginNumber${loginNumber}`)
                .then(res => res.json())
                .then(result => {
                    if (result.length > 0) {
                        setSignUpAndLoggedInUser(result[0].number);
                        sessionStorage.setItem("number", JSON.stringify(result));
                        if (whoComingPage &&
                            homepage &&
                            selectRoomPage &&
                            roomDetailPage &&
                            houseRulesPage
                        ) {
                            history.replace(from);
                            // history.push('/paymentGateWays')
                        }
                        else {
                            history.goBack()
                        }
                    }
                    else {
                        setVerifyLoginNumber('Phone number do not match. Please try again')
                    }
                });
        }
    }

    return (
        <>
            <NavBar />
            <div className="d-flex justify-content-center">
                <div className="mt-5 login_container mx-2">
                    <h5 className="text-center login_title">Log in</h5>
                    <NumberInput err={err} phoneNumber={phoneNumber} />
                    <div>
                        <p className="login_dis">We'll call or text you to confirm your number Standard message and data rates apply.</p>
                        {
                            checkEvent ? <>
                                {
                                    loginErr ? <Shake>
                                        <h6 className="text-danger text-center">{loginErr} <FontAwesomeIcon icon={faExclamationTriangle} className="ml-2" /> </h6>
                                    </Shake>
                                        : <>
                                            {
                                                verifyLoginNumber && <Shake>
                                                    <h6 className="text-danger text-center">{verifyLoginNumber} <FontAwesomeIcon icon={faExclamationTriangle} className="ml-2" /> </h6>
                                                </Shake>
                                            }
                                        </>
                                }
                            </> : ''
                        }
                        <button
                            onClick={() => handleLogin()}
                            className="
                                border-0 px-2 py-3 
                                text-white 
                                rounded-lg w-100"
                            id="search_btn"
                        >
                            Continue
                                </button>
                        <div className="d-flex justify-content-center">
                            <div className="pt-4">
                                <label htmlFor="" className="login_dis">Don't have an account?</label>
                                <NavLink to="/signUp">
                                    <Link className="signUp_link pl-2"> Sign up</Link>
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