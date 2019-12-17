import React, {Component} from 'react'
import './Nav.scss'
import {Link} from "react-router-dom";
import {Navbar} from 'react-bootstrap'
import Logo from "../Logo/Logo";


class Nav extends Component {

    render() {
        return (
            <div className="Nav">
                <Navbar expand="lg">
                    <Navbar.Brand href="/">
                        <Logo/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <div className="mr-auto">
                            <Link to="/page2">Page2</Link>
                            <Link to="/page3">Page3</Link>
                            <Link to="/page4">Page4</Link>
                            <Link to="/page6">Page6</Link>
                            <Link to="/page7">Page7</Link>
                        </div>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

Nav.propTypes = {}

Nav.defaultProps = {}

export default Nav
