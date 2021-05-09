import React, { useEffect, useState } from 'react';
import PhoneInput, {
    formatPhoneNumberIntl,
    isValidPhoneNumber
} from 'react-phone-number-input';
import { useLocation } from 'react-router';

const NumberInput = ({ err, numberTrue, phoneNumber }) => {
    const [value, setValue] = useState(null);
    const verifyNumber = value && isValidPhoneNumber(value);
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === "/signUp") {
            numberTrue(verifyNumber ? true : false);
        }
        if (verifyNumber && true) {
            err('');
        }
    }, [verifyNumber]);

    const func = () => {
        const checkoutValue = value ? (isValidPhoneNumber(value) ?
            undefined : err('Invalid Phone Number')) : err('Number is required');
        const isValid = value && isValidPhoneNumber(value) ? true : false;
        const number = value && formatPhoneNumberIntl(value);
        phoneNumber(isValid ? number : false);
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
            />
        </div>
    );
};

export default NumberInput;