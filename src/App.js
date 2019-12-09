import React from 'react';
// css import start
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
// css import end
// component import start
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import Slider from  "./components/Slider/Slider";
// component import end
// pages import start
import Contactus from "./pages/Contactus/Contactus";
import Aboutus from "./pages/Aboutus/Aboutus";
// pages import end
// tags import start
import  { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
// tags import end


function App() {
  return (
    <Router>
        <div className="App">
            <Header/>

            <div className="Main__content">
                <Switch>
                    <Route path='/' component={Slider} exact />
                    <Route path='/about' component={Aboutus} />
                    <Route path='/contact' component={Contactus} />
                </Switch>
            </div>

            <Footer/>
        </div>
    </Router>
  );
}

export default App;
