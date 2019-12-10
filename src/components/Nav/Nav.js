import React, { Component } from 'react'
import './Nav.scss'
import {Link} from "react-router-dom";


class Nav extends Component {
    
    render() {
        return (
            <div className="Nav">
                <ul className="navList">
                    <li>
                        <Link to="/about">About us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact us</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

Nav.propTypes = {}

Nav.defaultProps = {}

export default Nav
