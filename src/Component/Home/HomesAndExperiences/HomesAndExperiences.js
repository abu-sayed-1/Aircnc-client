import React, { useRef, useState } from 'react';
import './HomesAndExperiences.css'
import { Col, Container, Row } from 'react-bootstrap';
import { Fade } from 'react-reveal';
import { ClipLoader, HashLoader } from "react-spinners";

const HomesAndExperiences = ({ homesAndExperiencesData }) => {
    const [loading, setLoading] = useState(false)
    const load = useRef();
    console.log(load)

    return (
        <Container fluid>
            <h2 className="my-5 homesAndExperiences_content">Experiences</h2>
            <>
                {
                    homesAndExperiencesData ? <Row>
                        {
                            homesAndExperiencesData[0].experiences.map(item =>
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
                            )
                        }
                    </Row> : 'loading...'
                }
                <h2 className="my-5 homesAndExperiences_content">Homes</h2>
                <Row>
                    {
                        homesAndExperiencesData ? homesAndExperiencesData[0].homes.map(item =>
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
                            : <div ref={load} sm={12} md={6} lg={6} xl={4}>
                                <HashLoader size={70} />
                            </div>
                    }
                </Row>
            </>

        </Container >
    );
};

export default HomesAndExperiences;