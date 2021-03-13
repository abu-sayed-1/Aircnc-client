import React from 'react';
import './Division.css';
import { Col, Container, Row } from 'react-bootstrap';
import DivisionNavbar from '../Shred/DivisionNavbar/DivisionNavbar';
import GoogleMap from './GoogleMap/GoogleMap';
import SelectRoom from './SelectRoom/SelectRoom';

const Division = () => {
    return (
        <>
            <DivisionNavbar />
            <Container fluid className="pt-5">
                <Row>
                    <Col sm={12} md={7} lg={6} xl={6} className="pl-md-5">
                        <SelectRoom />
                    </Col>
                    <Col sm={12} md={5} lg={6} xl={6} className="p-md-0">
                        <GoogleMap />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Division;