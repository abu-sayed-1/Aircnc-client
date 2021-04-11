// import React, { useEffect, useState } from 'react';
// import PhoneInput, { formatPhoneNumber, formatPhoneNumberIntl, isValidPhoneNumber } from 'react-phone-number-input';

// const NumberInput = ({ err }) => {
//     const [value, setValue] = useState(null);
//     // const [showErr, setShowErr] = useState('');

//     const verifyNumber = value && isValidPhoneNumber(value)
//     useEffect(() => {
//         if (verifyNumber && true) {
//             // setShowErr('');
//             err('')
//         }
//     }, [verifyNumber]);

//     // useEffect(() => {
//         // err(showErr);
//     // }, [showErr])

//     const func = () => {
//         const checkoutValue = value ? (isValidPhoneNumber(value) ?
//             undefined : setShowErr('Invalid Phone Number')) : setShowErr('Number is required');
//         const isValid = value && isValidPhoneNumber(value) ? true : false;
//         if (isValid) {
//             const number = value && formatPhoneNumberIntl(value);
//             // fetch(`http://localhost:4000/verifyNumber${number}`)
//             //     .then(res => res.json())
//             //     .then(result => console.log(result));
//         }
//     };
//     // func();
//     return (
//         <div>
//             <PhoneInput
//                 placeholder="enter phone number"
//                 international
//                 withCountryCallingCode
//                 onBlur={() => func()}
//                 value={value}
//                 onChange={setValue}
//             />
//         </div>
//     );
// };

// export default NumberInput;





import React, { useEffect, useState } from 'react';
import PhoneInput, { formatPhoneNumber, formatPhoneNumberIntl, isValidPhoneNumber } from 'react-phone-number-input';

const NumberInput = ({ err }) => {
    const [value, setValue] = useState(null);
    const verifyNumber = value && isValidPhoneNumber(value)
    useEffect(() => {
        if (verifyNumber && true) {
            err('');
        }
    }, [verifyNumber]);

    const func = () => {
        const checkoutValue = value ? (isValidPhoneNumber(value) ?
            undefined : err('Invalid Phone Number')) : err('Number is required');
        const isValid = value && isValidPhoneNumber(value) ? true : false;
        if (isValid) {
            const number = value && formatPhoneNumberIntl(value);
            // fetch(`http://localhost:4000/verifyNumber${number}`)
            //     .then(res => res.json())
            //     .then(result => console.log(result));
        }
    };
    func();
    return (
        <div>
            <PhoneInput
                placeholder="enter phone number"
                international
                withCountryCallingCode
                // onBlur={() => func()}
                value={value}
                onChange={setValue}
            />
        </div>
    );
};

export default NumberInput;