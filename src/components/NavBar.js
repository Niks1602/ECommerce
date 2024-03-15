import React from "react";
import "./Navbar.css";

export default function NavBar() {
  return (
    <div>
      {/* <nav className="navbar navbar-expand-lg bg-body-tertiary navbar">
        <div className="logoDiv">
          <img src="logo192.png" alt="logo" />
        </div>
        <div style={{backgroundColor:"red" }}>GPS Location</div>
      
        <div className="container-fluid searchBarDiv"  style={{backgroundColor:"blue" }}>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2 searchBar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
        <div  style={{backgroundColor:"red" }}>Language</div>
        <div  style={{backgroundColor:"blue" }}>Sign In</div>
        <div  style={{backgroundColor:"red" }}>Add to Cart</div>
      </nav> */}

      <nav className="navbar">
        {/* ************ */}
        <div className="logoDiv">
          <img src="logo192.png" alt="" />
        </div>

        <div className="gpsLocation toBeHidden">
          <h6>
            <i className="fa-solid fa-location-dot fa-2xl"></i> GPS Location
          </h6>
        </div>
        {/* ************ */}
        <div className="searchBar">
          <div className="container-fluid searchBarDiv">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2 searchBar"
                type="search"
                placeholder="Search for Products, Brands and More"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
        {/* ************ */}
        <div className="languageDiv toBeHidden">
          <div className="flagDiv">
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
        <div className="signInDiv toBeHidden">
          <h6>SIGN IN</h6>
        </div>
        {/* ************ */}
        <div className="addToCartDiv toBeHidden">
          <h6>
            <i className="fa-solid fa-cart-shopping fa-2xl"></i>
            Add to Cart
          </h6>
        </div>
        {/* ************ */}
        <div className="menuBarIcon">
          <i className="fa-solid fa-bars fa-2xl"></i>
        </div>
      </nav>
    </div>
  );
}
