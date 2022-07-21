import React, { useState, useEffect } from "react";

export const Nav = (props) => {
  const [isMenuItemShowed, setIsMenuItemShowed] = useState(true);
  const [isSideMenuShowed, setIsSideMenuShowed] = useState(false);

  return (
    <div>
      <nav
        className={
          "w3-sidebar w3-bar-block w3-white w3-collapse w3-top " +
          (isSideMenuShowed
            ? "side-menu-block-display "
            : "side-menu-none-display ")
        }
        style={{ zIndex: "3", width: "250px" }}
        id="mySidebar"
      >
        <div className="w3-container w3-display-container w3-padding-16">
          <i
            onClick={() => setIsSideMenuShowed(false)}
            className="fa fa-remove w3-hide-large w3-button w3-display-topright"
          ></i>
          <h3 className="w3-wide">
            <b>LOGO</b>
          </h3>
        </div>
        <div
          className="w3-padding-64 w3-large w3-text-grey"
          style={{ fontWeight: "bold" }}
        >
          <a href="#" className="w3-bar-item w3-button">
            Shirts
          </a>
          <a href="#" className="w3-bar-item w3-button">
            Dresses
          </a>
          <a
            onClick={() => setIsMenuItemShowed(!isMenuItemShowed)}
            className="w3-button w3-block w3-white w3-left-align"
            id="myBtn"
          >
            Jeans <i className="fa fa-caret-down"></i>
          </a>
          <div
            id="demoAcc"
            className={
              "w3-bar-block w3-hide w3-padding-large w3-medium " +
              (isMenuItemShowed ? "w3-show" : null)
            }
          >
            <a href="#" className="w3-bar-item w3-button w3-light-grey">
              <i className="fa fa-caret-right w3-margin-right"></i>Skinny
            </a>
            <a href="#" className="w3-bar-item w3-button">
              Relaxed
            </a>
            <a href="#" className="w3-bar-item w3-button">
              Bootcut
            </a>
            <a href="#" className="w3-bar-item w3-button">
              Straight
            </a>
          </div>
          <a href="#" className="w3-bar-item w3-button">
            Jackets
          </a>
          <a href="#" className="w3-bar-item w3-button">
            Gymwear
          </a>
          <a href="#" className="w3-bar-item w3-button">
            Blazers
          </a>
          <a href="#" className="w3-bar-item w3-button">
            Shoes
          </a>
        </div>
        <a href="#footer" className="w3-bar-item w3-button w3-padding">
          Contact
        </a>
        <a
          className="w3-bar-item w3-button w3-padding"
          onClick={props.handleNewsletterVisibilityChange}
        >
          Newsletter
        </a>
        <a href="#footer" className="w3-bar-item w3-button w3-padding">
          Subscribe
        </a>
      </nav>
      <header className="w3-bar w3-top w3-hide-large w3-black w3-xlarge">
        <div className="w3-bar-item w3-padding-24 w3-wide">LOGO</div>
        <a
          className="w3-bar-item w3-button w3-padding-24 w3-right"
          onClick={() => setIsSideMenuShowed(!isSideMenuShowed)}
        >
          <i className="fa fa-bars"></i>
        </a>
      </header>

      <div
        className={
          "w3-overlay w3-hide-large " +
          (isSideMenuShowed
            ? "side-menu-block-display"
            : "side-menu-none-display")
        }
        onClick={() => setIsSideMenuShowed(false)}
        title="close side menu"
        id="myOverlay"
      ></div>
    </div>
  );
};
