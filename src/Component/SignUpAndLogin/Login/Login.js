import React, { useState } from 'react';
import './Login.css'
import PhoneInput, { formatPhoneNumber, formatPhoneNumberIntl, isValidPhoneNumber } from 'react-phone-number-input';

const Login = () => {
    const [value, setValue] = useState(null);
    const [showErr, setShowErr] = useState('');
    console.log(showErr);
    const func = () => {
        const checkoutValue = value ? (isValidPhoneNumber(value) ?
            undefined : setShowErr('Invalid phone number')) : setShowErr('number is required');
        const isValid = value && isValidPhoneNumber(value) ? true : false;
        if (isValid) {
            const number = value && formatPhoneNumberIntl(value);
        }
    };

    return (
        <div>
            <PhoneInput
                placeholder="enter phone number"
                international
                withCountryCallingCode
                value={value}
                onChange={setValue}
            />
            
            <div>
                <h6>{showErr ? showErr : ''}</h6>
                <p> {value && isValidPhoneNumber(value) ? 'true' : 'false'}</p>
                <p>{value && formatPhoneNumber(value)}</p>
                <p>{value && formatPhoneNumberIntl(value)}</p>
                <button onClick={() => func()}>checkout</button>
            </div>
        </div>
    );
};

export default Login;