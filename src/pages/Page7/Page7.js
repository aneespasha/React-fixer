import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './Page7.scss'
import Acco from "../../components/Acco/Acco";

class Page7 extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="Page7">
                <h1>Title</h1>
                <Acco/>
            </div>
        );
    }
}

Page7.propTypes = {}

Page7.defaultProps = {}

export default Page7
