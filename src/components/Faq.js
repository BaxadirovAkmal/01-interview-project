import React from 'react';
import SlideShowContact from "./SlideShowContact";

const Faq = props => {
  return (
    <div className="faq-wrapper">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="w-100 h-100">
              <img src="skill-1.png" alt="negotation" className="img-fluid"/>
            </div>
          </div>
          <div className="col">
            <p className="faq-title">>> FAQ</p>
            <div className="faq-second-title">Everybody Has Standard <br/>Ours Are Just Better.</div>
            <div className="faq-text">
              We are committed to providing excellent service to our customers since 1998. Providing excellent service
              to customer is our primary goal. this goal help our company.
            </div>
            <div className="progress-bar-box">
              <div className="single-progress" style={{width: "85%"}}>
                <div className="progress-name">
                  Hard Work
                </div>
                <div className="progress-score">85%</div>
              </div>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width: "85%"}} aria-valuenow="25"
                     aria-valuemin="0" aria-valuemax="100"/>
              </div>
            </div>
            <div className="progress-bar-box">
              <div className="single-progress" style={{width: "60%"}}>
                <div className="progress-name">
                  Ontime Delivery
                </div>
                <div className="progress-score">60%</div>
              </div>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width: "60%"}} aria-valuenow="25"
                     aria-valuemin="0" aria-valuemax="100"/>
              </div>
            </div>
            <div className="progress-bar-box">
              <div className="single-progress" style={{width: "70%"}}>
                <div className="progress-name">
                  Customar Love
                </div>
                <div className="progress-score">70%</div>
              </div>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width: "70%"}} aria-valuenow="25"
                     aria-valuemin="0" aria-valuemax="100"/>
              </div>
            </div>
            <div className="progress-bar-box">
              <div className="single-progress" style={{width: "50%"}}>
                <div className="progress-name">
                  24/7 Support
                </div>
                <div className="progress-score">50%</div>
              </div>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width: "50%"}} aria-valuenow="25"
                     aria-valuemin="0" aria-valuemax="100"/>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="number-box">
              <h3>423+</h3>
              <p>Happy Client</p>
            </div>
          </div>
          <div className="col">
            <div className="number-box">
              <h3>756+</h3>
              <p>Complate Project</p>
            </div>
          </div>
          <div className="col">
            <div className="number-box">
              <h3>756+</h3>
              <p>Electical Company</p>
            </div>
          </div>
          <div className="col">
            <div className="number-box">
              <h3>24+</h3>
              <p>Win Awards</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;