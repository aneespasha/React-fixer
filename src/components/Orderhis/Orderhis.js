import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './Orderhis.scss'
import {Table, Form, Col, PageItem, Pagination} from "react-bootstrap"
import Orderview from "../Orderview/Orderview";
import Icon from "../../icomoon/icon";

class Orderhis extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="Orderhis justify-content-md-center">
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Filter</Form.Label>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Check
                            type="radio"
                            label="Done"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Check
                            type="radio"
                            label="Pending"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                        />
                    </Form.Group>
                </Form.Row>
                <Table responsive striped bordered hover>
                    <thead>
                    <tr>
                        <th>Status</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <Orderview/>
                            <Icon color="#444" size={15} icon="times"/>
                        </td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                    <tr>
                        <td>
                            <Orderview/>
                            <Icon color="#444" size={15} icon="tick"/>
                        </td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                    <tr>
                        <td>
                            <Orderview/>
                            <Icon color="#444" size={15} icon="tick"/>
                        </td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                    </tbody>
                </Table>
                <Pagination className='justify-content-md-center'>
                    <Pagination.First/>
                    <Pagination.Prev/>
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Ellipsis/>

                    <Pagination.Item>{10}</Pagination.Item>
                    <Pagination.Item>{11}</Pagination.Item>
                    <Pagination.Item active>{12}</Pagination.Item>
                    <Pagination.Item>{13}</Pagination.Item>
                    <Pagination.Item disabled>{14}</Pagination.Item>

                    <Pagination.Ellipsis/>
                    <Pagination.Item>{20}</Pagination.Item>
                    <Pagination.Next/>
                    <Pagination.Last/>
                </Pagination>
            </div>
        );
    }
}

Orderhis.propTypes = {}

Orderhis.defaultProps = {}

export default Orderhis
