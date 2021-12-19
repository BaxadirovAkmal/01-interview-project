import React from 'react';
import Slider from "react-slick";

const SampleNextArrow = props => {
  const {onClick} = props;
  return (
    <div className="icon-float-right">
      <i
        className="icon-long-arrow-right"
        onClick={onClick}
      />
    </div>
  );
}

const SamplePrevArrow = props => {
  const {onClick} = props;
  return (
    <div className="icon-float-left">
      <i
        className="icon-long-arrow-left"
        onClick={onClick}
      />
    </div>

  );
}
const Banner = props => {

  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 3000,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>
  };
  return (
    <div className="banner">
      <Slider {...settings}>
        <div>
          <img src="sliders2.jpg" alt="" className="img-fluid"/>
        </div>
        <div>
          <img src="banner1-1.jpg" alt="" className="img-fluid"/>
        </div>
      </Slider>
    </div>
  );
}

export default Banner;