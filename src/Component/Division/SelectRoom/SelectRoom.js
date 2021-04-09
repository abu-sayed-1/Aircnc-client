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
    placeName: null
}

const reducer = (roomsState, action) => {
    switch (action.type) {
        case 'CHECKOUT':
            return { ...roomsState, place: action.payload };
        case 'ROOMS_DATA':
            return { ...roomsState, roomsData: action.payload };
        case 'PRICE':
            const remaining = roomsState.roomsData[0].rooms.filter(item => item.price === action.payload);
            return { ...roomsState, price: remaining };
        case 'PLACE_NAME':
            return { ...roomsState, placeName: action.payload }
        default: throw new Error('Unexpected action');
    }
}

const SelectRoom = () => {
    const [roomsState, dispatch] = useReducer(reducer, rooms);
    console.log(roomsState.placeName ? roomsState.placeName : 'rakib false');
    const history = useHistory();

    //https://cloud.mongodb.com/v2/5f70cef3fa46d90c51eefed1#metrics/replicaSet/602a1a1e3079de14cdd6bc32/explorer/aircnc/roomsInfo/find
    // useEffect(() => {
    //     fetch('http://localhost:4000/allPlace', {
    //         method: 'POST',
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify(place)
    //     })
    //         .then(result => console.log(result));
    // }, []);

    const verifyPlace = roomsState.price.length > 1 && roomsState.price;
    const roomsCon = roomsState.roomsData.length > 0 && roomsState.roomsData[0].rooms;
    const checkout = verifyPlace ? verifyPlace : roomsCon;
    // console.log(checkout);
    const gustsAndDate = JSON.parse(sessionStorage.getItem("gustsAndDates"));
    const convert = JSON.parse(sessionStorage.getItem('countryAndCity'));
    const verify = roomsState.place === null || roomsState.place == [] ? false : roomsState.place;
    if (verify) {
        convert[0].city = verify;
        const update = sessionStorage.setItem('countryAndCity', JSON.stringify(convert));
        window.location.reload(false);
        console.log(update);
    };
    const city = convert && convert[0].city;
    const country = convert[0].country;
    const check = roomsState.place ? roomsState.place : city

    const handlePlace = (e) => {
        dispatch({ type: 'CHECKOUT', payload: e.target.innerHTML })
    };

    const handlePrice = price => {
        dispatch({ type: 'PRICE', payload: price.target.innerHTML })
    }

    useEffect(() => {
        fetch(`http://localhost:4000/roomsByData${check}`)
            .then(res => res.json())
            .then(result => {
                console.log(result, '[result]');
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
            <div>
                <h6 className="pb-2">
                    252 stays {gustsAndDate && gustsAndDate[0].Month} {gustsAndDate && gustsAndDate[0].numericStartDay}-{gustsAndDate && gustsAndDate[0].numericEndDay}  {gustsAndDate && gustsAndDate[0].gusts} Gusts
                    </h6>
                <h2>Stay in {convert && convert[0].city} Division</h2>
                <div className="pt-3">
                    <Button variant="outline-0 btn_Lists">Cancellation flexibility</Button>{' '}
                    <Button variant="outline-0 btn_Lists">Type of place</Button>{' '}
                    <Button variant="outline-0 btn_Lists">Price</Button>{' '}
                    <Button variant="outline-0 btn_Lists">Instant Book</Button>{' '}
                    <Button variant="outline-0 btn_Lists">More Filters</Button>{' '}
                    <DropdownButton title="dropdown button">
                        <Dropdown.ItemText className="text-uppercase">
                            {country && country}
                        </Dropdown.ItemText>
                        {
                            roomsState.placeName ? <>
                                <Dropdown.Item className="btn btn-info" onClick={(e) => handlePlace(e)} as="button">{roomsState.placeName[0].place1}</Dropdown.Item>
                                <Dropdown.Item onClick={(e) => handlePlace(e)} as="button">{roomsState.placeName[0].place2}</Dropdown.Item>
                                <Dropdown.Item onClick={(e) => handlePlace(e)} as="button">{roomsState.placeName[0].place3}</Dropdown.Item>
                            </> : ''
                        }
                    </DropdownButton>
                    <DropdownButton title="Price">
                        <Dropdown.ItemText>
                            PRICE
                        </Dropdown.ItemText>
                        {
                            roomsState.roomsData.length > 0 && roomsState.roomsData[0].rooms.map(prices => <div key={prices.id}>
                                <Dropdown.Item onClick={(price) => handlePrice(price)} as="button">{prices.price}</Dropdown.Item>
                            </div>
                            )
                        }
                    </DropdownButton>
                </div>
            </div>
            {
                checkout ? <>
                    {
                        checkout.map(item =>
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
                        )
                    }
                </> : "loading"
            }
        </div >
    );
};

export default SelectRoom;