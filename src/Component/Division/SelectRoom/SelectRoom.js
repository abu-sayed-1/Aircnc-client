import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from '@material-ui/core';
import { Button, DropdownButton, Dropdown } from 'react-bootstrap';
import React, { useEffect, useReducer, useState } from 'react';
import './SelectRoom.css';
import { Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
// import place from '../../selectPlace.json';


const rooms = {
    place: null
}

const reducer = (roomsState, action) => {
    switch (action.type) {
        case 'CHECKOUT':
            return { ...roomsState, place: action.payload }
        default: throw new Error('Unexpected action');
    }
}

const SelectRoom = () => {
    const [roomsState, dispatch] = useReducer(reducer, rooms);
    const [roomsData, setRoomsData] = useState(null);
    console.log(roomsData)
    const [placeName, setPlaceName] = useState(null);
    const history = useHistory();

    // useEffect(() => {
    //     fetch('http://localhost:4000/allPlace', {
    //         method: 'POST',
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify(place)
    //     })
    //         .then(result => console.log(result));
    // }, []);

    const gustsAndDate = JSON.parse(sessionStorage.getItem("gustsAndDates"));
    const convert = JSON.parse(sessionStorage.getItem('countryAndCity'));
    convert[0].city = roomsState.place && roomsState;
    sessionStorage.setItem('countryAndCity', JSON.stringify(convert));
    const city = convert && convert[0].city;
    const country = convert[0].country;
    const check = roomsState.place ? roomsState.place : city

    const handlePlace = (e) => {
        dispatch({ type: 'CHECKOUT', payload: e.target.innerHTML })
    };

    useEffect(() => {
        fetch(`http://localhost:4000/roomsByData${check}`)
            .then(res => res.json())
            .then(result => {
                setRoomsData(result)
            })
    }, [check]);

    useEffect(() => {
        fetch(`http://localhost:4000/place${country}`)
            .then(res => res.json())
            .then(result => setPlaceName(result))
    }, [country]);

    const roomDetail = (id) => {
        history.push(`roomDetail${id}`)
    };

    return (
        <div className="pl-lg-5">
            {/* <div>
                <h6 className="pb-2">
                    252 stays {gustsAndDate && gustsAndDate[0].Month} {gustsAndDate && gustsAndDate[0].numericStartDay}-{gustsAndDate && gustsAndDate[0].numericEndDay}  {gustsAndDate && gustsAndDate[0].gusts} Gusts
                    </h6>
                <h2>Stay in {roomsData ? roomsData[0].city :''} Division</h2>
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
                            placeName && <>
                                <Dropdown.Item className="btn btn-info" onClick={(e) => handlePlace(e)} as="button">{placeName[0].place1}</Dropdown.Item>
                                <Dropdown.Item onClick={(e) => handlePlace(e)} as="button">{placeName[0].place2}</Dropdown.Item>
                                <Dropdown.Item onClick={(e) => handlePlace(e)} as="button">{placeName[0].place3}</Dropdown.Item>
                            </>
                        }
                    </DropdownButton>
                </div>
            </div>
            {
                roomsData ? roomsData[0].rooms.map(item =>
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
                    : 'loading....'
            } */}
        </div >
    );
};

export default SelectRoom;