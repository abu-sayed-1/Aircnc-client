import { faArrowRight, faChevronDown, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import './Card.css'
import { Container } from 'react-bootstrap';
import roomImg from '../../../images/air-cnc-master/images/photo-1522708323590-d24dbb6b0267.jpeg'
import { useLocation } from 'react-router';

const Card = ({ roomInfo }) => {
    const location = useLocation();
    const sliceLocation = location.pathname.substring(0, 11);
    const gusts_dates = JSON.parse(sessionStorage.getItem('gustsAndDates'));
    const {
        startFullDate,
        EndFullDate,
        gusts,
        days
    } = gusts_dates && gusts_dates[0]
    // const convertDays = parseFloat(days);
    // const convertPrice = parseFloat(roomInfo && roomInfo.price);
    const convertPrice = roomInfo && roomInfo.price;
    console.log(typeof (convertPrice))

    // const countPrice = convertPrice * convertDays;
    // const cleaning_fee = countPrice / 5;
    // const service_fee = countPrice / 10;

    const calculate = (days, convertPrice) => {
        parseFloat(  convertPrice);
        // console.log(cleaning_fee,service_fee)

    };

    calculate( convertPrice);
    // console.log(cleaning_fee, service_fee)


    return (
        <>
            <Container fluid className="shadow card_container p-4">
                <div className="d-flex">
                    <div>
                        {
                            sliceLocation === '/roomDetail' ?
                                <h6 className="m-0">
                                    <span className="rooms_price">$ {roomInfo && roomInfo.price}/</span>night
                                </h6>
                                : <h4 className="room_title mb-4">
                                    Light bright Lorem ipsum dolor sit.
                                 </h4>
                        }
                        <p className="pt-2">
                            <FontAwesomeIcon className='rooms_reviewIcon mr-2' icon={faStar} />
                            {roomInfo && roomInfo.review} reviews
                        </p>
                    </div>
                    {
                        sliceLocation !== '/roomDetail' && <div>
                            <img className="img-fluid rounded" src={roomImg} alt="" width="170px" />
                        </div>
                    }
                </div>

                <label className="pt-3 datesAndGests_item">Dates</label>
                <div className="d-flex border p-3 rounded">
                    <p className="mr-auto mb-0 Dates_item">{startFullDate && startFullDate}</p>
                    <FontAwesomeIcon className="ml-auto mr-auto align-self-center" icon={faArrowRight} />
                    <p className="ml-auto mb-0 Dates_item">{EndFullDate && EndFullDate}</p>
                </div>
                <label className="py-2 datesAndGests_item">Guests</label>
                <div className="d-flex border rounded p-3 guest">
                    <p className='mb-0'>{gusts && gusts} guests</p>
                    <FontAwesomeIcon className="ml-auto" icon={faChevronDown} />
                </div>
                <div className="d-flex pt-4 border-bottom">
                    <p className="pl-3"> ${roomInfo && roomInfo.price} x {days && days} nights</p>
                    {/* <p className="ml-auto pr-5">${countPrice}</p> */}
                </div>
                <div className="d-flex pt-4 border-bottom">
                    <p className="pl-3">Cleaning fee</p>
                    <p className="ml-auto pr-5">$10</p>
                </div>
                <div className="d-flex pt-4 border-bottom">
                    <p className="pl-3">Service fee</p>
                    <p className="ml-auto pr-5">$21</p>
                </div>
                <div className="d-flex pt-4">
                    <h5 className="pl-3">Total</h5>
                    <h5 className="ml-auto pr-5">$200</h5>
                </div>
                {
                    sliceLocation === '/roomDetail' &&
                    <div className="pt-4">
                        <button
                            className="border-0 px-2 py-3 text-white rounded-lg w-100"
                            id="search_btn"
                        >
                            Reserve
                   </button>
                        <p className="room_item room_list d-flex justify-content-center pt-3">You won't be charged yet</p>
                    </div>
                }
            </Container>
        </>
    );
};

export default Card;


















// import { faArrowRight, faChevronDown, faStar } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import React from 'react';
// import './Card.css'
// import { Container } from 'react-bootstrap';
// import roomImg from '../../../images/air-cnc-master/images/photo-1522708323590-d24dbb6b0267.jpeg'

// const Card = () => {
//     return (
//         <>
//             <Container fluid className="shadow card_container p-4">
//                 <div className="d-flex">
//                     <div>
//                         <h4 className="room_title mb-4"> Light bright Lorem ipsum dolor sit.</h4>
//                         <p>
//                             <FontAwesomeIcon className='rooms_reviewIcon mr-2' icon={faStar} />
//                     4.9(20 reviews)
//                 </p>
//                     </div>
//                     <div>
//                         <img className="img-fluid rounded" src={roomImg} alt="" width="170px" />
//                     </div>
//                 </div>

//                 <label className="pt-3 datesAndGests_item">Dates</label>
//                 <div className="d-flex border p-3 rounded">
//                     <p className="mr-auto mb-0 Dates_item">4/13/2021</p>
//                     <FontAwesomeIcon className="ml-auto mr-auto align-self-center" icon={faArrowRight} />
//                     <p className="ml-auto mb-0 Dates_item">4/13/2021</p>
//                 </div>
//                 <label className="py-2 datesAndGests_item">Guests</label>
//                 <div className="d-flex border rounded p-3 guest">
//                     <p className='mb-0'>4 guests</p>
//                     <FontAwesomeIcon className="ml-auto" icon={faChevronDown} />
//                 </div>
//                 <div className="d-flex pt-4 border-bottom">
//                     <p className="pl-3">$32 x 4 nights</p>
//                     <p className="ml-auto pr-5">$137</p>
//                 </div>
//                 <div className="d-flex pt-4 border-bottom">
//                     <p className="pl-3">Cleaning fee</p>
//                     <p className="ml-auto pr-5">$10</p>
//                 </div>
//                 <div className="d-flex pt-4 border-bottom">
//                     <p className="pl-3">Service fee</p>
//                     <p className="ml-auto pr-5">$21</p>
//                 </div>
//                 <div className="d-flex pt-4">
//                     <h5 className="pl-3">Total</h5>
//                     <h5 className="ml-auto pr-5">$200</h5>
//                 </div>
//                 <div className="pt-4">
//                     <button
//                         className="border-0 px-2 py-3 text-white rounded-lg w-100"
//                         id="search_btn"
//                     >
//                         Reserve
//                     </button>
//                     <p className="room_item room_list d-flex justify-content-center pt-3">You won't be charged yet</p>
//                 </div>
//             </Container>
//         </>
//     );
// };

// export default Card;