import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './Dropdo.scss'
import {DropdownButton, ButtonToolbar, Dropdown} from 'react-bootstrap'

class Dropdo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ButtonToolbar>
                {['Primary', 'Secondary', 'Success', 'Danger'].map(
                    variant => (
                        <DropdownButton
                            title={variant}
                            variant={variant.toLowerCase()}
                            id={`dropdown-variants-${variant}`}
                            key={variant}
                        >
                            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                            <Dropdown.Item eventKey="3" active>
                                Active Item
                            </Dropdown.Item>
                            <Dropdown.Divider/>
                            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                        </DropdownButton>
                    ),
                )}
            </ButtonToolbar>
        );
    }
}

Dropdo.propTypes = {}

Dropdo.defaultProps = {}

export default Dropdo
