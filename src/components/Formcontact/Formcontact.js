import React, { Component } from 'react'
import styles from './Formcontact.scss'
import {Col, Container, Row, Button, Form} from "react-bootstrap";



class Formcontact extends Component {

    render() {
        return (
            <div className="Formcontact">
                <Container>
                    <Row className="justify-content-md-center">
                        <Col xs={12} md={8}>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

Formcontact.propTypes = {}

Formcontact.defaultProps = {}

export default Formcontact
