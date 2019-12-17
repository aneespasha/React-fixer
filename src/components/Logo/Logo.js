import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styles from './Logo.scss'
import {Link} from "react-router-dom";

class Logo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="Logo">
                <Link to="/page2">LOGO</Link>
            </div>
        );
    }
}

Logo.propTypes = {}

Logo.defaultProps = {}

export default Logo
