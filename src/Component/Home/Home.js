import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NavBar from '../Shred/NavBar/NavBar';
import HomesAndExperiences from './HomesAndExperiences/HomesAndExperiences';
import SearchDestination from './SearchDestination/SearchDestination';

const Home = () => {
    const [homesAndExperiencesData, setHomesAndExperiencesData] = useState(null)
    const handleSearchResult = result => {
        setHomesAndExperiencesData(result);
    }
    return (
        <>
            <NavBar />
            <Container fluid className="px-5 my-5">
                <Row>
                    <Col xs={5}>
                        <SearchDestination handleSearchResult={handleSearchResult} />
                    </Col>
                    <Col>
                        <HomesAndExperiences homesAndExperiencesData={homesAndExperiencesData} />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Home;