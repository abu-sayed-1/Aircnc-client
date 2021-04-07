import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from '@material-ui/core';
import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import './SelectRoom.css';
import { Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const roomData = [

    {
        "id": "1",
        "name": "bangladesh",
        "city": "dhaka",
        "rooms":
            [
                {
                    "id": "1",
                    "img": "https://images.pexels.com/photos/3773570/pexels-photo-3773570.png?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "building": "https://images.pexels.com/photos/2157404/pexels-photo-2157404.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "title": "Light bright airy stylish apt & safe peaceful stay",
                    "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                    "internat": "Wifi Air conditioning Kitchen",
                    "cancellation": "cancellation flexibility available",
                    "review": "4.9 (20)",
                    "price": "34",
                    "totalPrice": "168"
                },
                {
                    "id": "2",
                    "img": "https://images.pexels.com/photos/3773576/pexels-photo-3773576.png?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "building": "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "title": "Apartment in Lost Panorama",
                    "GuestsAndRoomDetail": "4 guests 3 bedrooms 3 beds 3 baths",
                    "internat": "Wifi Air conditioning Kitchen",
                    "cancellation": "cancellation flexibility available",
                    "review": "3.10 (19)",
                    "price": "28",
                    "totalPrice": "150"
                },
                {
                    "id": "3",
                    "img": "https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "building": "https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "title": "AR Lounge & Pool (r&r +b&b)",
                    "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                    "internat": "Wifi Air conditioning Kitchen",
                    "cancellation": "cancellation flexibility available",
                    "review": "4.9 (20)",
                    "price": "50",
                    "totalPrice": "220"
                },
                {
                    "id": "4",
                    "img": "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "building": "https://images.pexels.com/photos/417273/pexels-photo-417273.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "title": "Light bright airy stylish apt & safe peaceful stay",
                    "GuestsAndRoomDetail": "5 guests 3 bedrooms 3 beds 3 baths",
                    "internat": "Wifi Air conditioning Kitchen",
                    "cancellation": "cancellation flexibility available",
                    "review": "7.9 (30)",
                    "price": "39",
                    "totalPrice": "180"
                },
                {
                    "id": "5",
                    "img": "https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "building": "https://images.pexels.com/photos/136413/pexels-photo-136413.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "title": "Lorem ipsum dolor sit amet consectetur.",
                    "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                    "internat": "Wifi Air conditioning Kitchen",
                    "cancellation": "cancellation flexibility available",
                    "review": "6.10 (11)",
                    "price": "40",
                    "totalPrice": "178"
                },
                {
                    "id": "6",
                    "img": "https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "building": "https://images.pexels.com/photos/258160/pexels-photo-258160.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "title": "AR Lounge & Pool (r&r +b&b) nice",
                    "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                    "internat": "Wifi Air conditioning Kitchen",
                    "cancellation": "cancellation flexibility available",
                    "review": "9.9 (26)",
                    "price": "66",
                    "totalPrice": "250"
                }]
    },
    {
        "id": "2",
        "name": "bangladesh",
        "city": "cox's bazar",
        "rooms":
            [
                {
                    "id": "1",
                    "img": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1873&q=80",
                    "building": "https://images.pexels.com/photos/441379/pexels-photo-441379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "title": "Light bright airy stylish apt & safe peaceful stay",
                    "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                    "internat": "Wifi Air conditioning Kitchen",
                    "cancellation": "cancellation flexibility available",
                    "review": "4.9 (27)",
                    "price": "99",
                    "totalPrice": "100"
                },
                {
                    "id": "2",
                    "img": "https://images.unsplash.com/photo-1564137799581-baca1aa17f5d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                    "building": "https://images.pexels.com/photos/326787/pexels-photo-326787.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "title": "Apartment in Lost Panorama",
                    "GuestsAndRoomDetail": "4 guests 3 bedrooms 3 beds 3 baths",
                    "internat": "Wifi Air conditioning Kitchen",
                    "cancellation": "cancellation flexibility available",
                    "review": "3.10 (19)",
                    "price": "77",
                    "totalPrice": "150"
                },
                {
                    "id": "3",
                    "img": "https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "building": "https://images.pexels.com/photos/2957461/pexels-photo-2957461.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "title": "AR Lounge & Pool (r&r +b&b)",
                    "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                    "internat": "Wifi Air conditioning Kitchen",
                    "cancellation": "cancellation flexibility available",
                    "review": "4.9 (20)",
                    "price": "53",
                    "totalPrice": "220"
                },
                {
                    "id": "4",
                    "img": "https://images.pexels.com/photos/3396670/pexels-photo-3396670.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "building": "https://images.pexels.com/photos/417273/pexels-photo-417273.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "title": "Light bright airy stylish apt & safe peaceful stay",
                    "GuestsAndRoomDetail": "5 guests 3 bedrooms 3 beds 3 baths",
                    "internat": "Wifi Air conditioning Kitchen",
                    "cancellation": "cancellation flexibility available",
                    "review": "7.9 (30)",
                    "price": "91",
                    "totalPrice": "180"
                },
                {
                    "id": "5",
                    "img": "https://images.pexels.com/photos/3773583/pexels-photo-3773583.png?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "building": "https://images.pexels.com/photos/136413/pexels-photo-136413.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "title": "Lorem ipsum dolor sit amet consectetur.",
                    "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                    "internat": "Wifi Air conditioning Kitchen",
                    "cancellation": "cancellation flexibility available",
                    "review": "6.10 (11)",
                    "price": "33",
                    "totalPrice": "178"
                },
                {
                    "id": "6",
                    "img": "https://images.pexels.com/photos/271795/pexels-photo-271795.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "building": "https://images.pexels.com/photos/258160/pexels-photo-258160.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "title": "AR Lounge & Pool (r&r +b&b) nice",
                    "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                    "internat": "Wifi Air conditioning Kitchen",
                    "cancellation": "cancellation flexibility available",
                    "review": "9.9 (26)",
                    "price": "66",
                    "totalPrice": "250"
                }]
    },
    {
        "id": "3",
        "name": "bangladesh",
        "city": "sundarban",
        "rooms":
            [
                {
                    "id": "1",
                    "img": "https://images.pexels.com/photos/272802/pexels-photo-272802.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "building": "https://images.pexels.com/photos/428427/pexels-photo-428427.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "title": "Light bright airy stylish apt & safe peaceful stay",
                    "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                    "internat": "Wifi Air conditioning Kitchen",
                    "cancellation": "cancellation flexibility available",
                    "review": "4.9 (20)",
                    "price": "26",
                    "totalPrice": "168"
                },
                {
                    "id": "2",
                    "img": "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "building": "https://images.pexels.com/photos/2091166/pexels-photo-2091166.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "title": "Apartment in Lost Panorama",
                    "GuestsAndRoomDetail": "4 guests 3 bedrooms 3 beds 3 baths",
                    "internat": "Wifi Air conditioning Kitchen",
                    "cancellation": "cancellation flexibility available",
                    "review": "3.10 (19)",
                    "price": "46",
                    "totalPrice": "150"
                },
                {
                    "id": "3",
                    "img": "https://images.pexels.com/photos/3220528/pexels-photo-3220528.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "building": "https://images.pexels.com/photos/371404/pexels-photo-371404.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "title": "AR Lounge & Pool (r&r +b&b)",
                    "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                    "internat": "Wifi Air conditioning Kitchen",
                    "cancellation": "cancellation flexibility available",
                    "review": "4.9 (20)",
                    "price": "59",
                    "totalPrice": "220"
                },
                {
                    "id": "4",
                    "img": "https://images.pexels.com/photos/2029722/pexels-photo-2029722.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "building": "https://images.pexels.com/photos/417273/pexels-photo-417273.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "title": "Light bright airy stylish apt & safe peaceful stay",
                    "GuestsAndRoomDetail": "5 guests 3 bedrooms 3 beds 3 baths",
                    "internat": "Wifi Air conditioning Kitchen",
                    "cancellation": "cancellation flexibility available",
                    "review": "7.9 (30)",
                    "price": "39",
                    "totalPrice": "180"
                },
                {
                    "id": "5",
                    "img": "https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "building": "https://images.pexels.com/photos/136413/pexels-photo-136413.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "title": "Lorem ipsum dolor sit amet consectetur.",
                    "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                    "internat": "Wifi Air conditioning Kitchen",
                    "cancellation": "cancellation flexibility available",
                    "review": "6.10 (11)",
                    "price": "49",
                    "totalPrice": "178"
                },
                {
                    "id": "6",
                    "img": "https://images.pexels.com/photos/3754594/pexels-photo-3754594.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "building": "https://images.pexels.com/photos/258160/pexels-photo-258160.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "title": "AR Lounge & Pool (r&r +b&b) nice",
                    "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                    "internat": "Wifi Air conditioning Kitchen",
                    "cancellation": "cancellation flexibility available",
                    "review": "9.9 (26)",
                    "price": "66",
                    "totalPrice": "250"
                }]
    },



]



const SelectRoom = () => {
    const [roomsData, setRoomsData] = useState(null);
    console.log(roomsData)
    const history = useHistory();
    // useEffect(() => {
    //     fetch('http://localhost:4000/roomsInfo', {
    //         method: 'POST',
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify(roomData)
    //     })
    //         .then(result => console.log(result));
    // }, [])
    // const city = sessionStorage.getItem("city");

    const gustsAndDate = JSON.parse(sessionStorage.getItem("gustsAndDates"));
    const convert = JSON.parse(sessionStorage.getItem('countryAndCity'));
    const city = convert && convert[0].city;
    useEffect(() => {
        fetch(`http://localhost:4000/roomsByData${city}`)
            .then(res => res.json())
            .then(result => {
                setRoomsData(result)
            })
    }, [city]);

    const roomDetail = (id) => {
        history.push(`roomDetail${id}`)
    };
    return (
        <div className="pl-lg-5">
            {/* <div>
                <h6 className="pb-2">
                    252 stays {gustsAndDate && gustsAndDate[0].Month} {gustsAndDate && gustsAndDate[0].numericStartDay}-{gustsAndDate && gustsAndDate[0].numericEndDay}  {gustsAndDate && gustsAndDate[0].gusts} Gusts
                    </h6>
                <h2>Stay in {roomsData && roomsData[0].city} Division</h2>
                <div className="pt-3">
                    <Button variant="outline-0 btn_Lists">Cancellation flexibility</Button>{' '}
                    <Button variant="outline-0 btn_Lists">Type of place</Button>{' '}
                    <Button variant="outline-0 btn_Lists">Price</Button>{' '}
                    <Button variant="outline-0 btn_Lists">Instant Book</Button>{' '}
                    <Button variant="outline-0 btn_Lists">More Filters</Button>{' '}
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