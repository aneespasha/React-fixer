import React, { Component } from 'react'
import styles from './Slider.scss'
import Carousel from 'react-bootstrap/Carousel';


class Slider extends Component {
    
    render() {
        function onChange(a, b, c) {
            console.log(a, b, c);
        }
        return (
            <div className="Slider">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://d25tv1xepz39hi.cloudfront.net/2019-10-23/files/Desktop-Bannerm-1500x370-@1x.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://d25tv1xepz39hi.cloudfront.net/2019-11-05/files/EOS-R-System-Desktop-Home-Page-Banner-1500-eng.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://d25tv1xepz39hi.cloudfront.net/2019-10-31/files/Banner-homepage-desktop-english-1500x370@1x.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

Slider.propTypes = {}

Slider.defaultProps = {}

export default Slider
