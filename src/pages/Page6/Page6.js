import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Page6.scss'
import Orderhis from "../../components/Orderhis/Orderhis";

class Page6 extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className="Page6">
                <h1>Title</h1>
                <Orderhis/>
            </div>
        );
    }
}

Page6.propTypes = {}

Page6.defaultProps = {}

export default Page6
