import React, { Component } from 'react'
import styles from './Header.scss'
import Nav from "../Nav/Nav";
import {Link} from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';




class Header extends Component {
    render() {
        return (
            <div className="Header">
                <Container>
                    <Row>
                        <Col xs={12} md={4}>
                            <div className="logo">
                                <Link to="/">LOGO</Link>
                            </div>
                        </Col>
                        <Col xs={6} md={8}>
                            <Nav/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

Header.propTypes = {}

Header.defaultProps = {}

export default Header
