import React from 'react';

const CompanyPlan = props => {
  return (
    <div className="company-plan-wrapper">
      <div className="container">
        <p>OUR WORKING PROCESS</p>
        <h2>Our Company Business Plan</h2>
        <div className="row row-card">
          <div className="col col-card">
            <div className="card-box">
              <div className="card">
                <div className="card-header">
                  <div className="circle">
                    <i className="icon-notebook"/>
                  </div>
                  <div className="title">Aplication From</div>
                </div>
                <div className="card-body">
                  Contrary to popular belief, Lorem sum is not simply random text. It has roots in a piece of classical.
                </div>
              </div>
            </div>
          </div>
          <div className="col col-card">
            <div className="card-box">
              <div className="card">
                <div className="card-header">
                  <div className="circle">
                    <i className="icon-spinner"/>
                  </div>
                  <div className="title">Aplication From</div>
                </div>
                <div className="card-body">
                  Contrary to popular belief, Lorem sum is not simply random text. It has roots in a piece of classical.
                </div>
              </div>
            </div>
          </div>
          <div className="col col-card">
            <div className="card-box">
              <div className="card">
                <div className="card-header">
                  <div className="circle">
                    <i className="icon-checkmark1"/>
                  </div>
                  <div className="title">Aplication From</div>
                </div>
                <div className="card-body">
                  Contrary to popular belief, Lorem sum is not simply random text. It has roots in a piece of classical.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlay-box">
          <div className="background-overlay">
            <div className="overlay-flex">
              <div className="left">
                <div className="subscribe-title">Our Subscribe</div>
                <div className="text">Lorem sum is not simply random text.</div>
              </div>
              <div className="right">
                <div className="right-input">
                  <input type="text" placeholder="Your email address"/>
                  <button>Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="company-price-section">
          <div className="price-title">COMPANY PRICE</div>
          <div className="plan-title">Our Pricing Plan</div>
          <div className="text-title">We ipsum dolor sit amet consect adipiscing elit, sed do eiusmod tempor
            incididunt.
          </div>
          <div className="container">
            <div className="row row-card">
              <div className="col col-card">
                <div className="card-box">
                  <div className="card">
                    <div className="card-header">
                        <img src="f5.png" alt="devise"/>
                      <div className="title">Basic Plan</div>
                      <div className="amount">$86.99 /month</div>
                    </div>
                    <div className="card-body">
                      <div>Video & Audio Assets</div>
                      <div>Graphic & Design assets</div>
                      <div>Presentation templates</div>
                    </div>
                    <div className="card-btn">
                      <button>Select Plan</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col col-card">
                <div className="card-box">
                  <div className="card">
                    <div className="card-header">
                      <img src="light.png" alt="light"/>
                      <div className="title">Advance Plan</div>
                      <div className="amount">$98.99 /month</div>
                    </div>
                    <div className="card-body">
                      <div>Video & Audio Assets</div>
                      <div>Graphic & Design assets</div>
                      <div>Presentation templates</div>
                    </div>
                    <div className="card-btn">
                      <button>Select Plan</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col col-card">
                <div className="card-box">
                  <div className="card">
                    <div className="card-header">
                      <img src="house.png" alt="house"/>
                      <div className="title">Professional Plan</div>
                      <div className="amount">$69.99 /month</div>
                    </div>
                    <div className="card-body">
                      <div>Video & Audio Assets</div>
                      <div>Graphic & Design assets</div>
                      <div>Presentation templates</div>
                    </div>
                    <div className="card-btn">
                      <button>Select Plan</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyPlan;