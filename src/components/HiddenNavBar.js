import React from "react";
import "./HiddenNavBarStyle.css";
export default function HiddenNavBar() {
  var navBarMenu = document.getElementById("MenuBar")
  function displayNav(){
    // if
  }

  return (
    <div className="hiddenNav">
      <nav className="hidden_navbar">
        {/* ************ */}
        <div className="logoDiv1">
          <img src="logo192.png" alt="" />
        </div>

        <div className="gpsLocation ">
          <h6>
            <i className="fa-solid fa-location-dot fa-2xl"></i> GPS Location
          </h6>
        </div>

        {/* ************ */}
        <div className="languageDiv1">
          <div className="flagDiv1">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_India.png/2560px-Flag_of_India.png"
              alt=""
            />
          </div>

          <div class="dropdown">
            <a
              className="btn btn-secondary dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              EN
            </a>

            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  US
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  UK
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  EN
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* ************ */}
        <div className="signInDiv1 ">
          <h6>SIGN IN</h6>
        </div>
        {/* ************ */}
        <div className="addToCartDiv ">
          <h6>
            <i className="fa-solid fa-cart-shopping fa-2xl"></i>
            Add to Cart
          </h6>
        </div>
        {/* ************ */}
        <div className="menuBarIcon1">
          <i className="fa-solid fa-bars fa-2xl" id="MenuBar" onClick="displayNav"></i>
        </div>
      </nav>
    </div>
  );
}
