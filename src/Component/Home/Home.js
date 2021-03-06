import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NavBar from '../Shred/NavBar/NavBar';
import HomesAndExperiences from './HomesAndExperiences/HomesAndExperiences';
import SearchDestination from './SearchDestination/SearchDestination';

const Home = () => {
    return (
        <>
            <NavBar />
            <Container fluid className="px-5 my-5">
                <Row>
                    <Col xs={5}>
                        <SearchDestination />
                    </Col>
                    <Col>
                        <HomesAndExperiences />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Home;