import React from 'react';
import Header from '../pages/sheard/header/Header';
import Footer from '../pages/sheard/footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/sheard/LeftNav/LeftNav';
import RightNAv from '../pages/sheard/RightNav/RightNAv';
import { Outlet } from 'react-router-dom';

const NewsLayout = () => {
    return (
        <div>
            <Header></Header>

            <Container>

                <Row>
    
                    <Col lg={9}>
                        <Outlet></Outlet>

                    </Col>
                    <Col lg={3}>
                        <RightNAv></RightNAv>

                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default NewsLayout;