import React, { useEffect, useState } from 'react';
import rowdra from "../../../images/air-cnc-master/images/rowdra.jpg";
import './RoomDetail.css';
import { Col, Container, Row } from 'react-bootstrap';
import { useLocation, useParams } from 'react-router';
import DivisionNavbar from '../../Shred/DivisionNavbar/DivisionNavbar';
import Card from '../../Shred/Card/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faChevronDown, faChevronUp, faHome, faSprayCan, faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from '@material-ui/core';
import { Fade } from 'react-reveal';

const RoomDetail = () => {
    const location = useLocation();
    const sliceLoc = location.pathname.substring(0, 11);
    const previousUrls = JSON.parse(sessionStorage.getItem('urls'));
    sessionStorage.setItem("urls", JSON.stringify(
        {
            "home": previousUrls.home,
            "selectRoom": previousUrls.selectRoom,
            "roomDetail": sliceLoc,

        }
    ));
    const [readMoreSpace, setReadMoreSpace] = useState(null);
    const [serviceAndCountryInfo, setServiceAndCountryInfo] = useState([]);
    const [roomInfo, setRoomInfo] = useState(null);
    if (roomInfo) {
        const price_review = { price: roomInfo.price, review: roomInfo.review, img: roomInfo.img };
        sessionStorage.setItem("priceAndReview", JSON.stringify(price_review));
    }
    const destination = JSON.parse(sessionStorage.getItem('countryAndCity'));
    const countryName = destination[0].country;
    const { id } = useParams()
    useEffect(() => {
        fetch(`http://localhost:4000/roomDetail${id}`)
            .then(res => res.json())
            .then(result => {
                if (result.length > 0) {
                    const checkout = result[0].rooms.find(item => item.id == id);
                    setRoomInfo(checkout);
                }

            })
    }, [id]);

    useEffect(() => {
        fetch(`http://localhost:4000/specificCountryInfo${countryName}`)
            .then(res => res.json())
            .then(result => setServiceAndCountryInfo(result))
    }, [countryName]);

    return (
        <>
            <DivisionNavbar />
            <div className=" roomDetail_content">
                {
                    roomInfo ?
                        <Container fluid className="mb-5">
                            <Row>
                                <Col sm={12} md={6} lg={6} xl={6} className="p-0">
                                    <Fade left>
                                        <img src={roomInfo.building} className="img-fluid roomAndBed" alt="" />
                                    </Fade>
                                </Col>
                                <Col sm={12} md={6} lg={6} xl={6} className="p-0 ">
                                    <Fade right>
                                        <img src={roomInfo.img} className="img-fluid roomAndBed" alt="" />
                                    </Fade>
                                </Col>
                            </Row>
                        </Container> : ''
                }
                <Container className='pt-3 pb-5 mb-4'>
                    <Row>
                        <Col sm={12} md={12} lg={6} xl={6}>
                            <Fade left>
                                {
                                    roomInfo ? <>
                                        <div className="d-flex border-bottom pb-2">
                                            <div>
                                                <h2>{roomInfo.title}</h2>
                                                <p className='m-1 room_item room_list'>{destination && destination[0].city}, {destination && destination[0].country}</p>
                                                <p className="m-1 room_item">{roomInfo.GuestsAndRoomDetail}</p>
                                            </div>
                                            <div className="pl-4">
                                                <img className="img-fluid rounded-circle" src={rowdra} alt="" width="60px" />
                                                <h5 className="self_check">Rowdra</h5>
                                            </div>
                                        </div>
                                    </> : ''
                                }

                                {
                                    serviceAndCountryInfo.length > 0 ? serviceAndCountryInfo.map((item, index) =>
                                        <div key={index} className="mt-4">
                                            <div className="border-bottom pb-2">
                                                <div className="pt-3">
                                                    <h5>
                                                        <FontAwesomeIcon className="mr-3 service" icon={faHome} />
                                                        <span className="room_item">{item.homeTitle}</span>
                                                    </h5>
                                                    <p className="room_item room_list space">{item.homeDis}</p>
                                                </div>
                                                <div className="pt-3">
                                                    <h5>
                                                        <FontAwesomeIcon className="mr-3 service" icon={faCheckSquare} />
                                                        <span className="room_item">{item.selfTitle}</span>
                                                    </h5>
                                                    <p className="room_item room_list space">{item.selfDis}</p>
                                                </div>
                                                <div className="pt-3">
                                                    <h5>
                                                        <FontAwesomeIcon className="mr-3 service" icon={faSprayCan} />
                                                        <span className="room_item">{item.sparklingTitle}</span>
                                                    </h5>
                                                    <p className="room_item room_list space">{item.sparklingDis}</p>
                                                </div>
                                                <div className="pt-3">
                                                    <h5>
                                                        <FontAwesomeIcon className="mr-3 service" icon={faUser} />
                                                        <span className="room_item">{item.superHost}</span>
                                                    </h5>
                                                    <p className="room_item room_list space">{item.superHostDis}</p>
                                                </div>
                                            </div>
                                            <div className="pt-3">
                                                <p className="room_item room_list">{item.hotelInfo}</p>
                                                <p className="room_item room_list">{item.countryInfo}</p>

                                                <Link
                                                    className="pt-3 read_more"
                                                    style={{ cursor: 'pointer' }}
                                                    onClick={() => setReadMoreSpace(!readMoreSpace)}
                                                >
                                                    Read more about the space
                                                   {
                                                        readMoreSpace ? <FontAwesomeIcon className="ml-2 mt-2" icon={faChevronUp} />
                                                            : <FontAwesomeIcon className="ml-2 mt-2" icon={faChevronDown} />
                                                    }
                                                </Link>
                                                {
                                                    readMoreSpace && <div className="pt-4">
                                                        <p className="room_item room_list">{item.countryMoreInfo}</p>
                                                    </div>
                                                }
                                                <div className="pt-5 py-5">
                                                    <h5>Reviews</h5>
                                                    <h6 className="review_content">
                                                        <FontAwesomeIcon icon={faStar} className="rooms_reviewIcon mr-2" />
                                                        {roomInfo && roomInfo.review + "Reviews"}
                                                    </h6>
                                                </div>
                                            </div>

                                        </div>)
                                        : ''
                                }
                            </Fade>
                        </Col>
                        <Col sm={12} md={12} lg={6} xl={6}>
                            <Fade right>
                                <Card />
                            </Fade>
                        </Col>
                    </Row>
                </Container>

            </div>
        </>
    );
};

export default RoomDetail;



