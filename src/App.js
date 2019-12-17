import React, {Component} from 'react'
// css import start
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
// css import end
// component import start
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
// component import end
// pages import start
import Contactus from "./pages/Contactus/Contactus";
import Aboutus from "./pages/Aboutus/Aboutus";
// pages import end
// tags import start
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import Home from "./pages/Home/Home";
import Page2 from "./pages/Page2/Page2";
import Page3 from "./pages/Page3/Page3";
import Page4 from "./pages/Page4/Page4";
import Page5 from "./pages/Page5/Page5";
import Page6 from "./pages/Page6/Page6";
import Page7 from "./pages/Page7/Page7";
import {Container} from "react-bootstrap";

// tags import end

class App extends Component {
    render() {
        let ShowHeader = <Header/>
        let ShowFooter = <Footer/>
        return (
            <Router>
                <div className="App">

                    {ShowHeader}

                    <div className="Main__content">
                        <Container>
                            <Switch>
                                <Route path='/' component={Home} exact/>
                                <Route path='/Page2' component={Page2}/>
                                <Route path='/Page3' component={Page3}/>
                                <Route path='/Page4' component={Page4}/>s
                                <Route path='/Page5' component={Page5}/>
                                <Route path='/Page6' component={Page6}/>
                                <Route path='/Page7' component={Page7}/>
                            </Switch>
                        </Container>
                    </div>

                    {ShowFooter}
                </div>

            </Router>
        );
    }
}

export default App;
