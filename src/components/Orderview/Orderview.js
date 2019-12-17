import React, {Component, useState} from 'react'
import PropTypes from 'prop-types'
import './Orderview.scss'
import {Modal, Button} from 'react-bootstrap'
import Icon from "../../icomoon/icon";
import {Link} from "react-router-dom";

function Orderview() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Link onClick={handleShow}>
                <Icon color="#444" size={26} icon="eye"/>
            </Link>

            <Modal show={show} onHide={handleClose} className="Orderview">
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h2>
                        Modal sub heading
                    </h2>
                    <div>
                        <p>Woohoo, you're reading this text in a modal!</p>
                    </div>
                </Modal.Body>
                <Modal.Footer>

                    {/*<Button variant="primary" onClick={handleClose} >*/}
                    {/*    Save Changes*/}
                    {/*</Button>*/}
                </Modal.Footer>
            </Modal>
        </>
    );
}

Orderview.propTypes = {}

Orderview.defaultProps = {}

export default Orderview

