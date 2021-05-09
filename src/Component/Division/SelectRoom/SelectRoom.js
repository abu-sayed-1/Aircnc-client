import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from '@material-ui/core';
import { Button, DropdownButton, Dropdown } from 'react-bootstrap';
import React, { useEffect, useReducer, } from 'react';
import './SelectRoom.css';
import { Col, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import { Fade } from 'react-reveal';
import { HashLoader } from 'react-spinners';

const rooms = {
    place: null,
    roomsData: [],
    sliceRoomInfo: [],
    price: [],
    placeName: [],
    moreFilters: false,
}

const reducer = (roomsState, action) => {
    switch (action.type) {
        case 'CHECKOUT':
            return { ...roomsState, place: action.payload };
        case 'ROOMS_DATA':
            return {
                ...roomsState,
                roomsData: action.payload,
                sliceRoomInfo: action.payload[0].rooms.slice(0, 3)
            };
        case 'PRICE':
            const remaining = roomsState.roomsData[0].rooms.filter(item => item.price === action.payload);
            return { ...roomsState, price: remaining };
        case 'PLACE_NAME':
            return { ...roomsState, placeName: action.payload };
        case 'SHOW_ALL':
            return { ...roomsState, price: [] };
        case 'MORE_FILTERS':
            const roomsInfo = roomsState.roomsData.length > 0;
            return {
                ...roomsState,
                moreFilters: roomsInfo,
                price: [],
                sliceRoomInfo: roomsInfo ?
                    roomsState.roomsData[0].rooms : []
            };
        case 'PREVIOUS_ROOMS':
            const previousData = roomsState.roomsData[0].rooms.slice(0, 3);
            return {
                ...roomsState,
                moreFilters: false,
                price: [],
                sliceRoomInfo: previousData
            }
        default: throw new Error('Unexpected action');
    };
};

const SelectRoom = () => {
    const [roomsState, dispatch] = useReducer(reducer, rooms);
    const location = useLocation();
    const history = useHistory();
    const previousUrl = JSON.parse(sessionStorage.getItem('urls'));
    sessionStorage.setItem('urls', JSON.stringify({
        "selectRoom": location.pathname,
        "home": previousUrl.home
    }));

    const checkout = roomsState.price.length >= 1 ? roomsState.price : roomsState.sliceRoomInfo;
    const gustsAndDate = JSON.parse(sessionStorage.getItem("gustsAndDates"));
    const country_city = JSON.parse(sessionStorage.getItem('countryAndCity'));
    if (roomsState.place) {
        country_city[0].city = roomsState.place;
        sessionStorage.setItem('countryAndCity', JSON.stringify(country_city));
        window.location.reload(false);
    };
    const city = country_city && country_city[0].city;
    const country = country_city[0].country;
    const check = roomsState.place ? roomsState.place : city

    const handlePlace = (e) => {
        dispatch({ type: 'CHECKOUT', payload: e.target.innerHTML })
    };
    const handlePrice = price => {
        dispatch({ type: 'PRICE', payload: price })
    };
    const roomDetail = (id) => {
        history.push(`roomDetail${id}`)
    };

    useEffect(() => {
        fetch(`http://localhost:4000/roomsByData${check}`)
            .then(res => res.json())
            .then(result => {
                if (result.length > 0) {
                    dispatch({ type: 'ROOMS_DATA', payload: result })
                }
            })
    }, [check]);

    useEffect(() => {
        fetch(`http://localhost:4000/place${country}`)
            .then(res => res.json())
            .then(result => {
                if (result.length > 0) {
                    const resCon = [
                        { "placeNam": result[0].place1 },
                        { "placeNam": result[0].place2 },
                        { "placeNam": result[0].place3 },
                    ];
                    dispatch({
                        type: 'PLACE_NAME', payload: resCon
                    }
                    );
                }
            });
    }, [country]);

    return (
        <div className="pl-lg-5">
            <Fade left>
                {gustsAndDate ? gustsAndDate.map((item, index) =>
                    <h6 key={index} className="pb-2">
                        252 stays {item.Month}
                        {item.numericStartDay}-
                            {item.numericEndDay}  {item.gusts} Gusts
                         </h6>) : ''
                }
                <h2>Stay in {country_city && country_city[0].city} Division</h2>
            </Fade>
            <div>
                <Row className="pt-4">
                    <Fade left>
                        <Button disabled variant="outline-0 btn_Lists mr-2 mt-2">Cancellation flexibility</Button>
                        <DropdownButton variant="outline-0 btn_Lists mr-2 mt-2" title="Type of place">
                            <Dropdown.ItemText className="text-uppercase bg-info text-white country_title">
                                {country && country}
                            </Dropdown.ItemText>
                            {
                                roomsState.placeName.length > 0 ?
                                    roomsState.placeName.map(cityList =>
                                        <div key={cityList.placeNam} className="city_items mt-1">
                                            <Dropdown.Item
                                                className="rounded-0 places"
                                                onClick={(e) => handlePlace(e)}
                                                as="button">
                                                {cityList.placeNam}
                                            </Dropdown.Item>
                                        </div>
                                    ) : ''
                            }
                        </DropdownButton>
                        <div>
                            <DropdownButton
                                variant="outline-0 btn_Lists mr-2 mt-2"
                                title="Price"
                                className="price_container">
                                <Dropdown.ItemText className="price_title text-white">
                                    PRICE
                             </Dropdown.ItemText>
                                <div className="price_items">
                                    <Dropdown.Item
                                        className="show_all"
                                        onClick={() =>
                                            dispatch({
                                                type: 'SHOW_ALL', payload: true
                                            })}
                                        as="button">Show-all
                                    </Dropdown.Item>
                                </div>
                                {
                                    roomsState.roomsData.length > 0 &&
                                    roomsState.roomsData[0].rooms.map(prices =>
                                        <div
                                            className="price_items"
                                            key={prices.id}
                                            onClick={() => handlePrice(prices.price)}
                                        >
                                            <Dropdown.Item as="button">
                                                <p className="mb-0 border-left-0 prices">${prices.price}</p>
                                            </Dropdown.Item>
                                        </div>
                                    )
                                }
                            </DropdownButton>
                        </div>
                        {
                            roomsState.moreFilters ?
                                <Button
                                    onClick={() => dispatch({
                                        type: 'PREVIOUS_ROOMS'
                                    })}
                                    variant="outline-0 btn_Lists mr-2 mt-2">
                                    Previous
                                </Button> :
                                <Button
                                    onClick={() => dispatch({
                                        type: 'MORE_FILTERS'
                                    })}
                                    variant="outline-0 btn_Lists mr-2 mt-2">
                                    More Filters
                            </Button>
                        }
                        <Button disabled variant="outline-0 btn_Lists mr-2 mt-2">Instant Book</Button>
                    </Fade>
                </Row>
            </div>
            <div className={checkout.length < 1 ? "d-flex justify-content-center selectRoom_loading mt-5" : "select_Rooms"}>
                {
                    checkout.length > 0 ? checkout.map(item =>
                        <Fade bottom key={item.id}>
                            <Link style={{ cursor: 'pointer' }} onClick={() => roomDetail(item.id)}>
                                <Row className='border-bottom py-5 rooms_container'>
                                    <Col sm={12} md={12} lg={12} xl={6}>
                                        <img className="img-fluid rooms_img" src={item.img} alt="" />
                                    </Col>
                                    <Col sm={12} md={12} lg={12} xl={6}>
                                        <div>
                                            <h4>{item.title}</h4>
                                            <p className="m-1">{item.GuestsAndRoomDetail}</p>
                                            <p className="pt-1">{item.internat}</p>
                                            <p className="pt-2">{item.cancellation}</p>
                                            <div className="d-flex">
                                                <h6 className="m-md-0 review_content">
                                                    <FontAwesomeIcon icon={faStar} className="rooms_reviewIcon" /> {item.review}
                                                </h6>
                                                <div className="pl-5">
                                                    <div className="pl-5">
                                                        <h6 className="m-0"><span className="rooms_price">${item.price}/</span>night</h6>
                                                        <small className='p-0 m-0 fw-light'>${item.totalPrice} total</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Link>
                        </Fade>
                    ) : <div>
                        <HashLoader color="#437786" size={120} />
                    </div>
                }
            </div>
        </div >
    );
};

export default SelectRoom;