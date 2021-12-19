import React from 'react';
import Banner from "./Banner";

function Main(props) {
  return (
    <div className="main-box">
      <div className="bg-linear">
        <div className="top-menu">
          <div className="left-logo">
            <img src="./wlogo.png" alt="wlogo"/>
          </div>
          <div className="right-menu">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">
                      Home
                      <span className="icon-chevron">
                        <i className="icon-chevron-down"/>
                      </span>
                    </a>
                    <ul className="sub-menu">
                      <li><a href="#">Electiman Page</a></li>
                      <li><a href="#">Electiman one Page</a></li>
                      <li><a href="#">Electiman Video</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Page
                      <span className="icon-chevron">
                        <i className="icon-chevron-down"/>
                      </span>
                    </a>
                    <ul className="sub-menu">
                      <li><a href="#">Team</a></li>
                      <li><a href="#">Pricing</a></li>
                      <li><a href="#">Faq</a></li>
                      <li><a href="#">Service</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Portfolio
                      <span className="icon-chevron">
                        <i className="icon-chevron-down"/>
                      </span>
                    </a>
                    <ul className="sub-menu">
                      <li><a href="#">Portfolio Grid</a></li>
                      <li><a href="#">Portfolio 3Column</a></li>
                      <li><a href="#">Portfolio 3Column Full</a></li>
                      <li><a href="#">Portfolio 4Column</a></li>
                      <li><a href="#">Portfolio 4Column Full</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Blog
                      <span className="icon-chevron">
                        <i className="icon-chevron-down"/>
                      </span>
                    </a>
                    <ul className="sub-menu">
                      <li><a href="#">Blog</a></li>
                      <li><a href="#">Blog Left Sidebar</a></li>
                      <li><a href="#">Blog Right Sidebar</a></li>
                      <li><a href="#">Blog Left Sidebar 2Column</a></li>
                      <li><a href="#">Blog Right Sidebar 2Column</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                  </li>
                </ul>
                <button className="menu-btn">
                  <a href="#">Booking now</a>
                </button>
              </div>
            </nav>
          </div>
        </div>
        <div className="text-box">
          <h1>Welcome To <span>Electiman</span></h1>
          <h2>A Professional</h2>
          <h2>Electricity Company</h2>
          <p>The two golden rules professional graphicns for bespoke campaign requirement.</p>
          <button className="menu-btn">
            <a href="#">Get A Free Quote</a>
          </button>
        </div>
        <div className="container">
          <div className="row float-box">
            <div className="col">
              <div className="col-padding-box">
                <div>
                  <img src="ship.png" alt="ship"/>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="col-padding-box">
                <div>
                  <img src="truck.png" alt="ship"/>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="col-padding-box">
                <div>
                  <img src="airplane.png" alt="ship"/>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="col-padding-box">
                <div>
                  <img src="ship.png" alt="ship"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Banner/>
    </div>
  );
}

export default Main;
