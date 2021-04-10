import React, { useState } from 'react';
import './Login.css'
import PhoneInput, { formatPhoneNumber, formatPhoneNumberIntl, isValidPhoneNumber } from 'react-phone-number-input';

const Login = () => {
    const [showErr, setShowErr] = useState(null);
    const [value, setValue] = useState(null);

    const func = () => {
        const checkoutValue = value ? (isValidPhoneNumber(value) ?
            undefined : console.log('Invalid phone number')) : console.log('Phone number required')
        // const remaining = checkoutValue ? console.log('error is not true') : 'is true';
        console.log(checkoutValue);

    };
    func();
    return (
        <div>
            <PhoneInput
                placeholder="enter phone number"
                international
                withCountryCallingCode
                value={value}
                onChange={setValue}
            // error={value ? (isValidPhoneNumber(value) ?
            //     undefined : console.log('Invalid phone number')) : console.log('Phone number required')}
            />
            <div>
                <p> {value && isValidPhoneNumber(value) ? 'true' : 'false'}</p>
                <p>{value && formatPhoneNumber(value)}</p>
                <p>{value && formatPhoneNumberIntl(value)}</p>

            </div>
        </div>
    );
};

export default Login;