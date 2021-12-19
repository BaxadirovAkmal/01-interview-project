import React from 'react';

const Agency = props => {
  return (
    <div className="agency-wrapper">
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="top-title">>>WHY CHOOSE US</p>
            <p className="agency-title">A Digital Agency Craftis</p>
            <p className="agency-title">Beautiful Experiences.</p>
            <div className="text">
              We are committed to providing excellent service to our customers since 1998. Providing excellent service
              to customer is our primary goal. this goal help our company.
            </div>
            <div className="main-img-box">
              <div className="img-box">
                <div className="mx-0">
                  <img src="electr.png" alt="electr"/>
                </div>
              </div>
              <div className="text-box">
                <p className="text-box-title">24/7 Business Support</p>
                <p className="text">Our people at Fixtech are most valuable assets. they are the faces of our organization.</p>
              </div>
            </div>
            <div className="main-img-box">
              <div className="img-box">
                <div className="mx-0">
                  <img src="light.png" alt="electr"/>
                </div>
              </div>
              <div className="text-box">
                <p className="text-box-title">Easy And Quick Problem</p>
                <p className="text">Our people at Fixtech are most valuable assets. they are the faces of our organization.</p>
              </div>
            </div>
            <div>
              <button className="agency-btn">
                Contact Now
              </button>
            </div>
          </div>
          <div className="col text-center">
            <img src="choose-1.png" alt="employee"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Agency;