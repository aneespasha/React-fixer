import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styles from './Loadingg.scss'
import Logo from "../Logo/Logo";


const LoaderHOC = (propName) => (WrappedComponent) => {
    return class LoaderHOC extends React.Component {
        isEmpty(prop) {
            return (
                prop === null
                || prop === undefined
                || (Array.isArray(prop) && prop.lengh === 0)
                || (prop.constructor === Object && Object.keys(prop).length === 0)
            );
        }

        render() {
            return (
                this.isEmpty(this.props[propName])
                    ? <h2 className='loader'>
                        <div className="lds-ring">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </h2>
                    : <WrappedComponent {...this.props} />)
        }
    }
}

const AppHeader = function (props) {
    return <h2>{props.headerText}</h2>;
};

const LoadingHeader = LoaderHOC('headerText')(AppHeader);

class App extends React.Component {
    state = {headerText: null};

    componentDidMount() {
        setTimeout(() => {
            this.setState({headerText: <Logo/>})
        }, 3000)
    }

    render() {
        return (
            <LoadingHeader headerText={this.state.headerText}/>
        );
    }
}

export default App
