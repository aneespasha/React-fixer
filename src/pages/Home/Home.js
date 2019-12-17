import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styles from './Home.scss'
import Logo from "../../components/Logo/Logo";
import Loadingg from "../../components/Loadingg/Loadingg";

class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="Home">
                <Loadingg/>
            </div>
        );
    }
}

Home.propTypes = {}

Home.defaultProps = {}

export default Home
