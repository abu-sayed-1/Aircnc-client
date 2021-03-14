import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';


const SelectRoom = () => {
    const [roomsData, setRoomsData] = useState(null);
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
    const convert = JSON.parse(sessionStorage.getItem('countryAndCity'))
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
            <div>
                <h6 className="pb-2">
                    252 stays {gustsAndDate && gustsAndDate[0].Month} {gustsAndDate && gustsAndDate[0].numericStartDay}-{gustsAndDate && gustsAndDate[0].numericEndDay}  {gustsAndDate && gustsAndDate[0].gusts} Gusts
                    </h6>
                <h2>Stay in {roomsData && roomsData[0].city} Division</h2>
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
            }
        </div >
    );
};

export default SelectRoom;