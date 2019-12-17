import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './Page4.scss'
import Fromaddress from "../../components/Fromaddress/Fromaddress";

class Page4 extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="Page4">
                <h1>Title</h1>
                <Fromaddress/>
            </div>
        );
    }
}

Page4.propTypes = {}

Page4.defaultProps = {}

export default Page4
