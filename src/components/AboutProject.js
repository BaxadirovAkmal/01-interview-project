import React from 'react';
import Slider from "react-slick";

const AboutProject = props => {

  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: false,
    prevArrow: false,
  };
  return (
    <div className="about-project">
      <div className="overlay">
        <div>
          <h3 className="top-title">HELP US</h3>
          <h2>Our Complate Peoject</h2>
        </div>
        <div className="container">
          <Slider {...settings}>
            <div className="slide-box">
              <img src="faq.png" alt="airplane" className="img-fluid"/>
            </div>
            <div className="slide-box">
              <img src="about-1.png" alt="airplane" className="img-fluid"/>
            </div>
          </Slider>
          <div className="row">
            <div className="col">
              <div className="d-flex align-items-center">
                <div className="chevron-circle">
                  <i className="icon-chevron-down"/>
                </div>
                <div className="text">Easy And Quick Problem Analysis</div>
              </div>
              <div className="d-flex align-items-center mx-20">
                <div className="chevron-circle">
                  <i className="icon-chevron-down"/>
                </div>
                <div className="text">World Wide Most Effective Business</div>
              </div>
              <div className="d-flex align-items-center">
                <div className="chevron-circle">
                  <i className="icon-chevron-down"/>
                </div>
                <div className="text">24/7 Business Support</div>
              </div>
            </div>
            <div className="col">
              <div className="d-flex align-items-center">
                <div className="chevron-circle">
                  <i className="icon-chevron-down"/>
                </div>
                <div className="text">Easy And Quick Problem Analysis</div>
              </div>
              <div className="d-flex align-items-center mx-20">
                <div className="chevron-circle">
                  <i className="icon-chevron-down"/>
                </div>
                <div className="text">World Wide Most Effective Business</div>
              </div>
              <div className="d-flex align-items-center">
                <div className="chevron-circle">
                  <i className="icon-chevron-down"/>
                </div>
                <div className="text">24/7 Business Support</div>
              </div>
            </div>
            <div className="col">
              <div className="d-flex align-items-center">
                <div className="chevron-circle">
                  <i className="icon-chevron-down"/>
                </div>
                <div className="text">Easy And Quick Problem Analysis</div>
              </div>
              <div className="d-flex align-items-center mx-20">
                <div className="chevron-circle">
                  <i className="icon-chevron-down"/>
                </div>
                <div className="text">World Wide Most Effective Business</div>
              </div>
              <div className="d-flex align-items-center">
                <div className="chevron-circle">
                  <i className="icon-chevron-down"/>
                </div>
                <div className="text">24/7 Business Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutProject;
