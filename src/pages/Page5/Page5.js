import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './Page5.scss'
import {Link} from "react-router-dom";

class Page5 extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="Page5">
                <h1>Thank You!</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore
                    et
                    dolore magna aliqua. Proin gravida hendrerit lectus a. In pellentesque massa placerat duis
                    ultricies
                    lacus sed turpis. Dignissim convallis aenean et tortor at. Ultrices neque ornare aenean euismod
                    elementum nisi. Augue lacus viverra vitae congue eu consequat. Morbi tristique senectus et netus
                    et.
                    Suspendisse faucibus interdum posuere lorem. Justo eget magna fermentum iaculis eu non diam
                    phasellus
                    vestibulum. Maecenas volutpat blandit aliquam etiam erat velit. Elit sed vulputate mi sit amet
                    mauris.
                    Semper risus in hendrerit gravida rutrum quisque non. At ultrices mi tempus imperdiet nulla
                    malesuada
                    pellentesque. Sodales ut eu sem integer. Gravida rutrum quisque non tellus. Nulla at volutpat
                    diam
                    ut
                    venenatis tellus in. Mollis aliquam ut porttitor leo a diam sollicitudin.
                </p>
                <div className="action">
                    <Link to="/page6">link to page6</Link>
                </div>
            </div>
        );
    }
}

Page5.propTypes = {}

Page5.defaultProps = {}

export default Page5
