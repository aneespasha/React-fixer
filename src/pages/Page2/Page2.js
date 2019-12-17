import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './Page2.scss'
import Formlogin from "../../components/Formlogin/Formlogin"
import {Row, Col} from "react-bootstrap"

class Page2 extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="Page2">
                <Row className="justify-content-md-center">
                    <Col xs lg="8">
                        <h1>Title</h1>
                        <Formlogin/>
                    </Col>
                </Row>
            </div>
        );
    }
}


Page2.propTypes = {}

Page2.defaultProps = {}

export default Page2
