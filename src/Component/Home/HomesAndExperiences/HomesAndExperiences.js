import React from 'react';
import './HomesAndExperiences.css'
import { Col, Container, Row } from 'react-bootstrap';

const HomesAndExperiences = ({ homesAndExperiencesData }) => {
    return (
        <Container fluid>
            <h2>Experiences</h2>
            {
                homesAndExperiencesData ?
                    <Row>
                        {
                            homesAndExperiencesData[0].experiences.map(item =>
                                <Col key={item.id} sm={12} md={6} lg={4} xl={3} className="pl-1">
                                    <div>
                                        <img className="img-fluid" src={item.img} alt="" />
                                        <h6 className="text-uppercase">{item.place}</h6>
                                        <h4>{item.title}</h4>
                                        <p><span>${item.price} </span>{item.person}</p>
                                        <p><span className="text-info pr-1 review_icon">★★★★★</span>{item.review}</p>
                                    </div>
                                </Col>
                            )
                        }
                    </Row>
                    : 'Loading...'
            }
        </Container>
    );
};

export default HomesAndExperiences;