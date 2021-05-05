import React, { useRef, useState } from 'react';
import './HomesAndExperiences.css'
import { Col, Container, Row } from 'react-bootstrap';
import { Fade } from 'react-reveal';
import { ClipLoader, HashLoader } from "react-spinners";

const HomesAndExperiences = ({ homesAndExperiencesData }) => {
    const loading = homesAndExperiencesData.length > 0 ? true : false;

    return (
        <Container fluid>
            <h2 className="my-5 homesAndExperiences_content">Experiences</h2>
            <>
                <Row className={!loading && "d-flex justify-content-center hash_loader"}>
                    {
                        homesAndExperiencesData.length > 0 ? homesAndExperiencesData[0].experiences.map(item =>
                            <Col key={item.id} sm={12} md={6} lg={6} xl={3} className="pl-1">
                                <Fade bottom>
                                    <div>
                                        <img className="img-fluid" src={item.img} alt="" />
                                        <small className="text-uppercase place">{item.place}</small>
                                        <h5 className="homesAndExperiences_title pt-2">{item.title}</h5>
                                        <p className="m-0"><span>${item.price} </span>{item.person}</p>
                                        <p>
                                            <span className="text-info pr-1 review_icon">
                                                ★★★★★</span>{item.review}
                                        </p>
                                    </div>
                                </Fade>
                            </Col>
                        ) : <div sm={12} md={6} lg={6} xl={4}>
                            <HashLoader color="#437786" size={120} />
                        </div>
                    }
                </Row>

                <h2 className="my-5 homesAndExperiences_content">Homes</h2>
                <Row className={!loading && "d-flex justify-content-center hash_loader"}>
                    {
                        homesAndExperiencesData.length > 0 ? homesAndExperiencesData[0].homes.map(item =>
                            <Col key={item.id} sm={12} md={6} lg={6} xl={4} className="pl-1">
                                <Fade bottom>
                                    <div>
                                        <img className="img-fluid" src={item.img} alt="" />
                                        <small className="text-uppercase place">{item.place}</small>
                                        <h5 className="homesAndExperiences_title pt-2">{item.title}</h5>
                                        <p className="m-0"><span>${item.price} </span>{item.person}</p>
                                        <p>
                                            <span className="text-info pr-1 review_icon">
                                                ★★★★★</span>{item.review}
                                        </p>
                                    </div>
                                </Fade>
                            </Col>
                        )
                            : <div sm={12} md={6} lg={6} xl={4}>
                                <HashLoader color="#437786" size={120} />
                            </div>
                    }
                </Row>
            </>

        </Container >
    );
};

export default HomesAndExperiences;