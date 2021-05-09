import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLocation } from 'react-router';
import NavBar from '../Shred/NavBar/NavBar';
import HomesAndExperiences from './HomesAndExperiences/HomesAndExperiences';
import SearchDestination from './SearchDestination/SearchDestination';
import Fade from 'react-reveal/Fade';
const Home = () => {
    const location = useLocation();
    sessionStorage.setItem("urls", JSON.stringify({ 'home': location.pathname }));
    const [homesAndExperiencesData, setHomesAndExperiencesData] = useState([])
    const handleSearchResult = result => {
        setHomesAndExperiencesData(result);
    }

    return (
        <>
            <NavBar />
            <Container fluid className="px-md-5 my-md-5">
                <Row>
                    <Col sm={12} md={12} lg={5} xl={5}>
                        <Fade top>
                            <SearchDestination
                                handleSearchResult={handleSearchResult}
                            />
                        </Fade>
                    </Col>
                    <Col sm={12} md={12} lg={7} xl={7}>
                        <HomesAndExperiences
                            homesAndExperiencesData={homesAndExperiencesData}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Home;