import React, {useState} from 'react';
import Main from "./Main";

const Header = props => {
  const [check, setState] = useState(true);

  return (
    <>
      <div className={check ? "header" : "none"}>
        <div className="header-left">
          <div className="d-flex align-items-center">
            <a style={{display: "contents"}}
               href="https://www.templatemonster.com/wordpress-themes/electiman-electrical-repair-service-wordpress-theme-153399.html">
              <i className="icon-caret-left"/>
              Electiman - Electrical Repair Service WordPress Theme </a>
          </div>
          <div className="icons">
            <i className="icon-mobile"/>
            <i className="mx-25 icon-tablet_mac"/>
            <i className="icon-computer"/>
          </div>
        </div>
        <div className="header-right">
          <button className="btn btn-success">
            <i className="icon-shopping-cart"/>
            Buy Now
          </button>
          <span className="title">or</span>
          <button className="btn btn-outline-primary">
            Get Unlimited Downloads
          </button>
          <i className="icon-heart"/>
        </div>
      </div>
      <div className="main-wrapper">
        <button className="hide-panel" onClick={() => setState(!check)}>
          <i className="icon-caret-left"/>
        </button>
        <Main/>
      </div>
    </>
  );
}

export default Header;
