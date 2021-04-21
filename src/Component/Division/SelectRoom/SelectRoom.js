import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from '@material-ui/core';
import { Button, DropdownButton, Dropdown } from 'react-bootstrap';
import React, { useEffect, useReducer, } from 'react';
import './SelectRoom.css';
import { Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const rooms = {
    place: null,
    roomsData: [],
    price: [],
    placeName: null,
    showAll: false
}

const reducer = (roomsState, action) => {
    switch (action.type) {
        case 'CHECKOUT':
            return { ...roomsState, place: action.payload };
        case 'ROOMS_DATA':
            return { ...roomsState, roomsData: action.payload };
        case 'PRICE':
            const remaining = roomsState.roomsData[0].rooms.filter(item => item.price === action.payload);
            return { ...roomsState, price: remaining, showAll: false };
        case 'PLACE_NAME':
            return { ...roomsState, placeName: action.payload };
        case 'SHOW_ALL':
            return { ...roomsState, showAll: action.payload };
        default: throw new Error('Unexpected action');
    }
}

const SelectRoom = () => {
    const [roomsState, dispatch] = useReducer(reducer, rooms);
    const history = useHistory();
    // useEffect(() => {
    //     fetch('http://localhost:4000/allPlace', {
    //         method: 'POST',
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify(place)
    //     })
    //         .then(result => console.log(result));
    // }, []);

    const verifyPlace = roomsState.showAll ? false : roomsState.price.length > 1 && roomsState.price;
    const specificRoom = roomsState.showAll ? false : roomsState.price.length === 1 && roomsState.price;
    const roomsCon = roomsState.roomsData.length > 0 && roomsState.roomsData[0].rooms;
    const checkout = verifyPlace ? verifyPlace : roomsCon;
    const gustsAndDate = JSON.parse(sessionStorage.getItem("gustsAndDates"));
    const convert = JSON.parse(sessionStorage.getItem('countryAndCity'));
    const verify = roomsState.place === null || roomsState.place == [] ? false : roomsState.place;
    if (verify) {
        convert[0].city = verify;
        const update = sessionStorage.setItem('countryAndCity', JSON.stringify(convert));
        window.location.reload(false);
    };
    const city = convert && convert[0].city;
    const country = convert[0].country;
    const check = roomsState.place ? roomsState.place : city

    const handlePlace = (e) => {
        dispatch({ type: 'CHECKOUT', payload: e.target.innerHTML })
    };

    const handlePrice = price => {
        console.log(price)
        dispatch({ type: 'PRICE', payload: price })
    }

    useEffect(() => {
        fetch(`http://localhost:4000/roomsByData${check}`)
            .then(res => res.json())
            .then(result => {
                dispatch({ type: 'ROOMS_DATA', payload: result })
            })
    }, [check]);

    useEffect(() => {
        fetch(`http://localhost:4000/place${country}`)
            .then(res => res.json())
            .then(result => dispatch({ type: 'PLACE_NAME', payload: result }))
    }, [country]);

    const roomDetail = (id) => {
        history.push(`roomDetail${id}`)
    };

    return (
        <div className="pl-lg-5">
            <h6 className="pb-2">
                252 stays {gustsAndDate && gustsAndDate[0].Month} {gustsAndDate && gustsAndDate[0].numericStartDay}-{gustsAndDate && gustsAndDate[0].numericEndDay}  {gustsAndDate && gustsAndDate[0].gusts} Gusts
                    </h6>
            <h2>Stay in {convert && convert[0].city} Division</h2>
            <div>
                <Row className="pt-4">
                    <Button disabled variant="outline-0 btn_Lists mr-2 mt-2">Cancellation flexibility</Button>{' '}
                    <DropdownButton variant="outline-0 btn_Lists mr-2 mt-2" title="Type of place">
                        <Dropdown.ItemText className="text-uppercase bg-info text-white country_title">
                            {country && country}
                        </Dropdown.ItemText>
                        {
                            roomsState.placeName ? <>
                                <div className="city_items mt-1">
                                    <Dropdown.Item className="rounded-0 places" onClick={(e) => handlePlace(e)} as="button">{roomsState.placeName[0].place1}</Dropdown.Item>
                                </div>
                                <div className="city_items ">
                                    <Dropdown.Item className="places" onClick={(e) => handlePlace(e)} as="button">{roomsState.placeName[0].place2}</Dropdown.Item>
                                </div>
                                <div className="city_items ">
                                    <Dropdown.Item className="places" onClick={(e) => handlePlace(e)} as="button">{roomsState.placeName[0].place3}</Dropdown.Item>
                                </div>
                            </> : ''
                        }
                    </DropdownButton>{' '}
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
                            roomsState.roomsData.length > 0 && roomsState.roomsData[0].rooms.map(prices =>
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
                    </DropdownButton>{' '}
                    <Button disabled variant="outline-0 btn_Lists mr-2 mt-2">Instant Book</Button>{' '}
                    <Button disabled variant="outline-0 btn_Lists mr-2 mt-2">More Filters</Button>{' '}
                </Row>
            </div>
            {
                specificRoom ? <div>
                    <Link style={{ cursor: 'pointer' }} onClick={() => roomDetail(specificRoom[0].id)}>
                        <Row className='border-bottom py-5 rooms_container'>
                            <Col sm={12} md={12} lg={12} xl={6}>
                                <img className="img-fluid rooms_img" src={specificRoom[0].img} alt="" />
                            </Col>
                            <Col sm={12} md={12} lg={12} xl={6}>
                                <div>
                                    <h4>{specificRoom[0].title}</h4>
                                    <p className="m-1">{specificRoom[0].GuestsAndRoomDetail}</p>
                                    <p className="pt-1">{specificRoom[0].internat}</p>
                                    <p className="pt-2">{specificRoom[0].cancellation}</p>
                                    <div className="d-flex">
                                        <h6 className="m-md-0 review_content">
                                            <FontAwesomeIcon icon={faStar} className="rooms_reviewIcon" /> {specificRoom[0].review}
                                        </h6>
                                        <div className="pl-5">
                                            <div className="pl-5">
                                                <h6 className="m-0"><span className="rooms_price">${specificRoom[0].price}/</span>night</h6>
                                                <small className='p-0 m-0 fw-light'>${specificRoom[0].totalPrice} total</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Link>
                </div> :
                    <>
                        {
                            checkout ? checkout.map(item =>
                                <Link key={item.id} style={{ cursor: 'pointer' }} onClick={() => roomDetail(item.id)}>
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
                            ) : 'Loading....'
                        }
                    </>
            }
        </div >
    );
};

export default SelectRoom;