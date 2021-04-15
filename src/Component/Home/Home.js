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
            <Container fluid className="px-md-5 my-md-5">
                <Row>
                    <Col sm={12} md={12} lg={5} xl={5}>
                        <SearchDestination handleSearchResult={handleSearchResult} />
                    </Col>
                    <Col sm={12} md={12} lg={7} xl={7}>
                        <HomesAndExperiences homesAndExperiencesData={homesAndExperiencesData} />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Home;