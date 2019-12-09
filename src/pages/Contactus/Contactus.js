import React, { Component } from 'react'
import styles from './Contactus.scss'
import Formcontact from "../../components/Formcontact/Formcontact";

class Contactus extends Component {

    render() {
        return (
            <div className="Contactus">
                <h1>Contact us</h1>
                <Formcontact/>
            </div>
        );
    }
}

Contactus.propTypes = {}

Contactus.defaultProps = {}

export default Contactus
