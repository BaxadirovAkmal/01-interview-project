import React from 'react';

const Services = props => {
  return (
    <div className="service-wrapper">
      <div className="main-title">
        <div className="top-title">OUR SERVICE</div>
        <div className="second-title">Magical & Inspirational lessons for <br/> people seeking help.</div>
      </div>

      <div className="container">
        <div className="row mt-55">
          <div className="col">
            <div className="col-card">
              <div>
                <img src="electr.png" alt="electr"/>
              </div>
              <div className="img-title">
                Electricity Overuse
              </div>
              <div className="body-title">
                Contrary to popular belief, Lorem sum is not simply random text. It has roots in a piece of classical.
              </div>
              <button className="card-btn">
                READ MORE
              </button>
            </div>
          </div>
          <div className="col">
            <div className="col-card">
              <div>
                <img src="light.png" alt="light"/>
              </div>
              <div className="img-title">
                Faulty & Old Wiring
              </div>
              <div className="body-title">
                Contrary to popular belief, Lorem sum is not simply random text. It has roots in a piece of classical.
              </div>
              <button className="card-btn">
                READ MORE
              </button>
            </div>
          </div>
          <div className="col">
            <div className="col-card">
              <div>
                <img src="f6.png" alt="circuit"/>
              </div>
              <div className="img-title">
                Short Circuit Repair
              </div>
              <div className="body-title">
                Contrary to popular belief, Lorem sum is not simply random text. It has roots in a piece of classical.
              </div>
              <button className="card-btn">
                READ MORE
              </button>
            </div>
          </div>
        </div>
        <div className="row mt-30">
          <div className="col">
            <div className="col-card">
              <div>
                <img src="electr.png" alt="electr"/>
              </div>
              <div className="img-title">
                Electricity Overuse
              </div>
              <div className="body-title">
                Contrary to popular belief, Lorem sum is not simply random text. It has roots in a piece of classical.
              </div>
              <button className="card-btn">
                READ MORE
              </button>
            </div>
          </div>
          <div className="col">
            <div className="col-card">
              <div>
                <img src="light.png" alt="light"/>
              </div>
              <div className="img-title">
                Faulty & Old Wiring
              </div>
              <div className="body-title">
                Contrary to popular belief, Lorem sum is not simply random text. It has roots in a piece of classical.
              </div>
              <button className="card-btn">
                READ MORE
              </button>
            </div>
          </div>
          <div className="col">
            <div className="col-card p-0">
              <div className="video-box">
                <div className="video-circle">
                  <a href="https://www.youtube.com/watch?v=XHOmBV4js_E" target="_blank" title="www.youtube.com" className="mt-2">
                    <i className="icon-caret-left"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="service-elem-box">
          <div service-title>
            <p>Get 15-Minutes Complimentary <br/>Zoom or Skype session.</p>
          </div>
          <div>
              <button className="service-btn">
                Contact Now
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;