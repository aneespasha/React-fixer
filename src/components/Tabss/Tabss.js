import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styles from './Tabss.scss'
import {Tabs, Tab} from 'react-bootstrap'

class Tabss extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                <Tab eventKey="home" title="Home">
                    Farewell! thou art too dear for my possessing, And like enough thou know'st thy estimate, The
                    charter of thy worth gives thee releasing; My bonds in thee are all determinate. For how do I hold
                    thee but by thy granting? And for that riches where is my deserving? The cause of this fair gift in
                    me is wanting, And so my patent back again is swerving. Thy self thou gav'st, thy own worth then not
                    knowing, Or me to whom thou gav'st it, else mistaking;
                </Tab>
                <Tab eventKey="profile" title="Profile">
                    So are you to my thoughts as food to life, Or as sweet-season'd showers are to the ground; And for
                    the peace of you I hold such strife As 'twixt a miser and his wealth is found. Now proud as an
                    enjoyer, and anon Doubting the filching age will steal his treasure; Now counting best to be with
                    you alone, Then better'd that the world may see my pleasure: Sometime all full with feasting on your
                    sight, And by and by clean starved for a look;
                </Tab>
                <Tab eventKey="contact" title="Contact" disabled>
                    three
                </Tab>
            </Tabs>
        );
    }
}

Tabss.propTypes = {}

Tabss.defaultProps = {}

export default Tabss
