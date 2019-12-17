import React, {Component} from "react";
import './Slicksl.scss'
import Slider from "react-slick"

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: true,
            arrows: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: true,
                        centerMode: true,
                        centerPadding: '40px',
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: true,
                        centerMode: true,
                        dots: false,
                        centerPadding: '40px',
                    }
                }
            ]
        };
        return (
            <div>
                <Slider {...settings}>
                    <div>
                        <h2>Platinum Wash - 100%</h2>
                        <h3>
                            <span>₹ 300.00</span>
                            <span>45MIN - 1HR</span>
                        </h3>
                        <span>
                            1. Dust cleaning <br/>
                            2. Wash & Wax cleaning <br/>
                            3. Mat Cleaning <br/>
                            4. Fragrance <br/>
                            5. Tyre poliching <br/>
                            6. Vaccume Cleaning <br/>
                            7. Leather Seat Cleaning <br/>
                            8. Dashboard Polishing <br/>
                            9. Wax poliching <br/>
                            10. Roof cleaning <br/>
                            11. Engine Water and Form Washing
                        </span>
                    </div>
                    <div>
                        <h2>Gold Wash- 85 %</h2>
                        <h3>
                            <span>₹ 200.00</span>
                            <span>30 MINS</span>
                        </h3>
                        <span>
                            1. Dust cleaning <br/>
                            2. Wash & Wax cleaning <br/>
                            3. Mat Cleaning <br/>
                            4. Fragrance <br/>
                            5. Tyre poliching <br/>
                            6. Vaccume Cleaning <br/>
                            7. Leather Seat Cleaning <br/>
                            8. Dashboard Polishing <br/>
                            9. Wax poliching <br/>
                            10. L Water + 15mins
                        </span>
                    </div>
                    <div>
                        <h2>Silver Wash - 70%</h2>
                        <h3>
                            <span>₹ 150.00</span>
                            <span>20 MIN</span>
                        </h3>
                        <span>
                            1. Dust cleaning <br/>
                            2. Wash & Wax cleaning <br/>
                            3. Mat Cleaning<br/>
                            4. Fragrance<br/>
                            5. Tyre poliching <br/>
                        </span>
                    </div>
                    <div>
                        <h2>Bronze Wash - 50%</h2>
                        <h3>
                            <span>₹ 99.00</span>
                            <span>15 MIN</span>
                        </h3>
                        <span>
                            1. Dust cleaning <br/>
                            2. Wash & Wax cleaning <br/>
                            3. Mat Cleaning <br/>
                            4. Fragrance
                        </span>
                    </div>

                </Slider>
            </div>
        );
    }
}
