import { faArrowRight, faChevronDown, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Card.css'
import { Container } from 'react-bootstrap';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';

const Card = () => {
    const location = useLocation();
    const sliceLocation = location.pathname.substring(0, 11);
    const gusts_dates = JSON.parse(sessionStorage.getItem('gustsAndDates'));
    const {
        startFullDate,
        EndFullDate,
        gusts,
        days
    } = gusts_dates && gusts_dates[0];
    const priceReview = JSON.parse(sessionStorage.getItem('priceAndReview'));
    const convertDays = parseFloat(days);
    const convertPrice = parseFloat(priceReview && priceReview.price);
    const countPrice = convertPrice * convertDays;
    const cleaning_fee = Math.round(5 / 100 * countPrice);
    const service_fee = Math.round(10 / 100 * countPrice);
    const total = countPrice + cleaning_fee + service_fee;
    sessionStorage.setItem("totalPrice", total);

    return (
        <>
            <Container fluid className="shadow card_container p-4">
                <div className="d-flex">
                    <div>
                        {
                            sliceLocation === '/roomDetail' ?
                                <h6 className="m-0">
                                    <span className="rooms_price">${convertPrice && convertPrice}/</span>night
                                </h6>
                                : <h4 className="room_title mb-4">
                                    Light bright Lorem ipsum dolor sit.
                                 </h4>
                        }
                        <p className="pt-2">
                            <FontAwesomeIcon className='rooms_reviewIcon mr-2' icon={faStar} />
                            {priceReview && priceReview.review} reviews
                        </p>
                    </div>
                    {
                        sliceLocation !== '/roomDetail' && <div>
                            <img className="img-fluid rounded" src={priceReview && priceReview.img} alt="" width="170px" />
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
                    <p className="pl-3"> ${convertPrice && convertPrice} x {days && days} nights</p>
                    <p className="ml-auto pr-5">${countPrice}</p>
                </div>
                <div className="d-flex pt-4 border-bottom">
                    <p className="pl-3">Cleaning fee</p>
                    <p className="ml-auto pr-5">${cleaning_fee && cleaning_fee}</p>
                </div>
                <div className="d-flex pt-4 border-bottom">
                    <p className="pl-3">Service fee</p>
                    <p className="ml-auto pr-5">${service_fee && service_fee}</p>
                </div>
                <div className="d-flex pt-4">
                    <h5 className="pl-3">Total</h5>
                    <h5 className="ml-auto pr-5">${total}</h5>
                </div>
                {
                    sliceLocation === '/roomDetail' &&
                    <div className="pt-4">
                        <NavLink to="/houseRules">
                            <button
                                className="border-0 px-2 py-3 text-white rounded-lg w-100"
                                id="search_btn"
                            >
                                Reserve
                       </button>
                        </NavLink>
                        <p className="room_item room_list d-flex justify-content-center pt-3">You won't be charged yet</p>
                    </div>
                }
            </Container>
        </>
    );
};

export default Card;
