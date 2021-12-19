import React from 'react';

const Footer = props => {
  return (
    <div className="footer-wrapper">
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="footer-title">Help Link</p>
            <p className="footer-item">
              <a href="#" className="footer-link">About Company</a>
            </p>
            <p className="footer-item">
              <a href="#" className="footer-link">IFor Customers</a>
            </p>
            <p className="footer-item">
              <a href="#" className="footer-link">SEO Blog & News</a>
            </p>
            <p className="footer-item">
              <a href="#" className="footer-link">Careers & Reviews</a>
            </p>
            <p className="footer-item">
              <a href="#" className="footer-link">Sitemap</a>
            </p>
          </div>
          <div className="col">
            <p className="footer-title">Quick Link</p>
            <p className="footer-item"><a href="#" className="footer-link">Our Product</a></p>
            <p className="footer-item"><a href="#" className="footer-link">Documentation</a></p>
            <p className="footer-item"><a href="#" className="footer-link">Our Services</a></p>
            <p className="footer-item"><a href="#" className="footer-link">Company</a></p>
            <p className="footer-item"><a href="#" className="footer-link">What We Do?</a></p>
          </div>
          <div className="col">
            <p className="footer-title">Quick Link</p>
            <div className="footer-location-box">
              <div className="location-icon">
                <i className="icon-location"/>
              </div>
              <div className="location-text">
                178 Alex Avenue. William <br/>Street. New York, NY-25435
              </div>
            </div>
            <div className="footer-location-box">
              <div className="location-icon rotate">
                <i className="icon-phone1"/>
              </div>
              <div className="location-text">
                (088) +99 234-45856
              </div>
            </div>
            <div className="footer-location-box">
              <div className="location-icon">
               <i className="icon icon-world"/>
              </div>
              <div className="location-text">
                demo@example.com
              </div>
            </div>
          </div>
          <div className="col">
            <p className="footer-title">Service</p>
            <p className="footer-item"><a href="#" className="footer-link">SEO for Small Business</a></p>
            <p className="footer-item"><a href="#" className="footer-link">Enterprise SEO</a></p>
            <p className="footer-item"><a href="#" className="footer-link">SEO for Local Services</a></p>
            <p className="footer-item"><a href="#" className="footer-link">National SEO</a></p>
            <p className="footer-item"><a href="#" className="footer-link">International SEO</a></p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col bottom-left">Copyright © electiman all rights reserved.</div>
            <div className="col bottom-right">
              <p><a href="#">About</a></p>
              <p><a href="#">Service</a></p>
              <p><a href="#">Contact</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;