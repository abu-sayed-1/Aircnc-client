import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const { signUpAndLoggedInUser, setSignUpAndLoggedInUser } = useContext(UserContext);
    const userNumber = JSON.parse(sessionStorage.getItem("number"));
    const checkout = userNumber ? userNumber[0].number : false;
    return (
        <Route
            {...rest}
            render={({ location }) =>
                (signUpAndLoggedInUser || checkout) ? (
                    children
                ) :
                    (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />

                    )
            }
        />
    );
};

export default PrivateRoute;