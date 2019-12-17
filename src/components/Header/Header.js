import React, {Component} from 'react';
import './Header.scss';
import Nav from "../Nav/Nav";
import {Link} from "react-router-dom";
import {Container, Row, Col} from 'react-bootstrap';


class Header extends Component {
    render() {
        return (
            <div className="Header">
                <Container>
                    <Nav/>
                </Container>
            </div>
        );
    }
}

Header.propTypes = {}

Header.defaultProps = {}

export default Header
