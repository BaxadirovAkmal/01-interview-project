import React from 'react';

const About = props => {
  return (
    <div className="about-wrapper">
      <div className="container">
        <div className="row" style={{marginTop: "147px"}}>
          <div className="col">
            <h5 style={{ color: "#FFA500", marginBottom: "20px"}}>>> OUR ABOUT</h5>
            <h1 style={{ color: "#222222"}}>Provide Awesome</h1>
            <h1 style={{ color: "#222222", marginBottom: "20px"}}>Service With Our Tools</h1>
            <div style={{color: "#606060", marginBottom: "20px"}}>
              What is Lorem Ipsum Lorem Ipsum is simply dummy text of the rinting and typesetting industry Lorem Ipsum
              has been the industry’s tandard dummy text ever since the 1500s when an unknown printer too galley of type
              and scrambled it to make.
            </div>
            <div style={{color: "#606060", marginBottom: "20px"}}>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical.
            </div>
              <div className="d-flex align-items-center">
                <div className="chevron-circle">
                  <i className="icon-chevron-down"/>
                </div>
                <div className="text">World Wide Most Effective Business</div>
              </div>
            <div className="d-flex my-2 align-items-center">
              <div className="chevron-circle">
                <i className="icon-chevron-down"/>
              </div>
              <div className="text">24/7 Business Support</div>
            </div>
            <div className="d-flex align-items-center">
              <div className="chevron-circle">
                <i className="icon-chevron-down"/>
              </div>
              <div className="text">Easy And Quick Problem Analysis</div>
            </div>
            <div className="sign">
              <img src="singb-1.png" alt="sign"/>
            </div>
            <div className="mt-2" style={{color: "#606060"}}>
              Co-Funder
            </div>
          </div>
          <div className="col">
            <img src="/about-2.png" alt="people"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;