import React from 'react';
import Header from '../pages/sheard/header/Header';
import Footer from '../pages/sheard/footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/sheard/LeftNav/LeftNav';
import RightNAv from '../pages/sheard/RightNav/RightNAv';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../pages/sheard/navegationBar/NavigationBar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <NavigationBar></NavigationBar>

            <Container>
               
                <Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>

                    </Col>
                    <Col lg={6}>
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

export default Main;