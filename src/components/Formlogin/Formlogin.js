import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styles from './Formlogin.scss'
import {Form} from "react-bootstrap";
import {Link} from "react-router-dom";

class Formlogin extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="Formlogin">

                    <Form>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"/>
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"/>
                        </Form.Group>
                        <div className="action">
                            <Link to="/page3">link to page3</Link>
                        </div>
                    </Form>
            </div>
        );
    }
}

Formlogin.propTypes = {}

Formlogin.defaultProps = {}

export default Formlogin
