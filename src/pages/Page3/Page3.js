import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './Page3.scss'
import Slicksl from "../../components/Slicksl/Slicksl";
import {Link} from "react-router-dom";

class Page3 extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="Page3">
                <Slicksl/>
                <div className="action">
                    <Link to="/page4">link to page4</Link>
                </div>
            </div>
        );
    }
}

Page3.propTypes = {}

Page3.defaultProps = {}

export default Page3
