import React from 'react';
import {Zoom} from 'react-slideshow-image';
import Slider from "react-slick";
import Agency from "./Agency";

const SlideShowContact = props => {
  const images = [
    'banner1-1.jpg',
    'sliders2.jpg',
  ];

  const zoomInProperties = {
    indicators: false,
    scale: 1.4,
    prevArrow: false
  }

  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: false,
    prevArrow: false,
  };

  return (
    <>
      <div className="slideShow-wrapper">
        <div className="zoom-overlay">
          <Zoom {...zoomInProperties}>
            {images.map((each, index) => (
              <div key={index} style={{width: "100%"}}>
                <img style={{objectFit: "cover", width: "100%"}} src={each}/>
              </div>
            ))}
          </Zoom>
          <div className="main-overlay">
            <div className="contact-box">
              <div className="video-box">
                <div className="video-circle">
                  <a href="https://www.youtube.com/watch?v=XHOmBV4js_E" target="_blank" title="www.youtube.com"
                     className="mt-2">
                    <i className="icon-caret-left"/>
                  </a>
                </div>
                <p className="help-title">HOW CAN WE HELP</p>
                <p className="contact-number">Get Your Quote or Call: (+880) 123-453-786</p>
                <p className="service-title">Find Out All Repair Service We Offer.</p>
                <div>
                  <button className="contact-btn">Contact Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="float-box-wrapper">
          <div className="container">
            <div className="float-box">
              <div className="left">
                <p className="top-title">OUR TESTIMONIAL</p>
                <p className="question-title">What They Say</p>
                <p className="question-title">About our</p>
                <p className="question-title">Company ?</p>
              </div>
              <div className="right">
                <Slider {...settings}>
                  <div className="card-wrapper">
                    <div className="card">
                      <div className="overlay">
                        <div className="main-box">
                          <div className="img-box">
                            <img src="abi.png" alt="man"/>
                          </div>
                          <div>
                            <p className="name">Taylor Green</p>
                            <p className="info">24/7 Support</p>
                          </div>
                        </div>
                        <p className="card-body-text">“After cycling through multiple SEO mpaniesan seeing no results, I
                          finally came across SEO. ult Choosing to work with Onum is hands dowene</p>
                        <div className="star-box">
                          <img src="star.png" alt="star"/>
                          <img src="star.png" alt="star"/>
                          <img src="star.png" alt="star"/>
                          <img src="star.png" alt="star"/>
                          <img src="star.png" alt="star"/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card">
                      <div className="overlay">
                        <div className="main-box">
                          <div className="img-box">
                            <img src="girl.png" alt="man"/>
                          </div>
                          <div>
                            <p className="name">Christina Tores</p>
                            <p className="info">Co- Funder</p>
                          </div>
                        </div>
                        <p className="card-body-text">We are a professional SEO mpaniesan seeingos results, I finally
                          came
                          across SEO. ult Choosing to
                          work with Onum is hands dowene of</p>
                        <div className="star-box">
                          <img src="star.png" alt="star"/>
                          <img src="star.png" alt="star"/>
                          <img src="star.png" alt="star"/>
                          <img src="star.png" alt="star"/>
                          <img src="star.png" alt="star"/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card">
                      <div className="overlay">
                        <div className="main-box">
                          <div className="img-box">
                            <img src="abi.png" alt="man"/>
                          </div>
                          <div>
                            <p className="name">Chicana Males</p>
                            <p className="info">Marketing</p>
                          </div>
                        </div>
                        <p className="card-body-text">We are a professional SEO mpaniesan seeingos results, I finally
                          came
                          across SEO. ult Choosing to
                          work with Onum is hands dowene of</p>
                        <div className="star-box">
                          <img src="star.png" alt="star"/>
                          <img src="star.png" alt="star"/>
                          <img src="star.png" alt="star"/>
                          <img src="star.png" alt="star"/>
                          <img src="star.png" alt="star"/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card">
                      <div className="overlay">
                        <div className="main-box">
                          <div className="img-box">
                            <img src="girl.png" alt="man"/>
                          </div>
                          <div>
                            <p className="name">Sabir Jennings</p>
                            <p className="info">Macanical</p>
                          </div>
                        </div>
                        <p className="card-body-text">We are a professional SEO mpaniesan seeingos results, I finally
                          came
                          across SEO. ult Choosing to
                          work with Onum is hands dowene of</p>
                        <div className="star-box">
                          <img src="star.png" alt="star"/>
                          <img src="star.png" alt="star"/>
                          <img src="star.png" alt="star"/>
                          <img src="star.png" alt="star"/>
                          <img src="star.png" alt="star"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Agency/>
    </>
  );
}

export default SlideShowContact;

