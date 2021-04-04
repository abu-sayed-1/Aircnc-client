import React, { useEffect, useState } from 'react';
import rowdra from "../../../images/air-cnc-master/images/rowdra.jpg";
import './RoomDetail.css';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import DivisionNavbar from '../../Shred/DivisionNavbar/DivisionNavbar';
import Card from '../../Shred/Card/Card';



const serviceAndCountryInfo = [
    {
        id: 1,
        country: "bangladesh",
        homeTitle: "Entre home",
        homeDis: "you'll have the condominium to yourself.",
        selfTitle: "Self check-in",
        selfDis: "you can check in with the doorman.",
        sparklingTitle:"Sparkling clean",
        sparklingDis: "10 recent guests said this place was sparkling clean.",
        superHost: "Rowdra is a Superhost",
        superHostDis: " Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.",
        hotelInfo: "It's newly constructed 7 storied building maintaining building code by a locally famous architect. Enough light and natural air are playing here. The place (apartment) is calm and noise free. You'll love my place for its lovely and bright look comfortable stay.",
        countryInfo: ""

    }
]



const RoomDetail = () => {
    const [roomInfo, setRoomInfo] = useState(null);
    console.log(roomInfo);
    const { id } = useParams()
    useEffect(() => {
        fetch(`http://localhost:4000/roomDetail${id}`)
            .then(res => res.json())
            .then(result => {
                if (result) {
                    const checkout = result[0].rooms.find(item => item.id == id);
                    setRoomInfo(checkout);
                }

            })
    }, [id]);


    const destination = JSON.parse(sessionStorage.getItem('countryAndCity'));

    return (
        <>
            <DivisionNavbar />
            {
                roomInfo ? <>
                    <Container fluid>
                        <Row>
                            <Col className="pr-0">
                                <img src={roomInfo.building} className="img-fluid roomAndBed" alt="" />
                            </Col>
                            <Col className="pl-0">
                                <img src={roomInfo.img} className="img-fluid roomAndBed" alt="" />
                            </Col>
                        </Row>
                    </Container>
                    <Container className='pt-3 pb-5 mb-4'>
                        <Row>
                            <Col>
                                <>
                                    <div className="d-flex border-bottom pb-2">
                                        <div>
                                            <h2>{roomInfo.title}</h2>
                                            <p className='m-1'>{destination && destination[0].city}, {destination && destination[0].country}</p>
                                            <p className="m-1">{roomInfo.GuestsAndRoomDetail}</p>
                                        </div>
                                        <div className="pl-4">
                                            <img className="img-fluid rounded-circle" src={rowdra} alt="" width="60px" />
                                            <h5 className="self_check">Rowdra</h5>
                                        </div>
                                    </div>

                                </>
                            </Col>
                            <Col>
                                <Card />
                            </Col>
                        </Row>
                    </Container>
                </> : 'loading'
            }

        </>
    );
};

export default RoomDetail;