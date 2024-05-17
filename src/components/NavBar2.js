import React from "react";
import "./Navbar2.css";
import { Link } from "react-router-dom";
export default function NavBar2() {
  return (
    <div className="secondNavBar">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="https://www.youtube.com/">
            Best Sellers
          </a>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="https://www.youtube.com/"
                >
                  Todays Deal
                </a>
              </li>
              <Link to="/filtersort" style={{ textDecoration: "none" }}>
                <li className="nav-item">
                  <a className="nav-link">Mobile</a>
                </li>
              </Link>
              <Link to="/filtersort" style={{ textDecoration: "none" }}>
                <li className="nav-item">
                  <a className="nav-link">
                    <i class="fa-solid fa-filter fa-lg"></i>filter by your
                    choice
                  </a>
                </li>
              </Link>

              {/* <li className="nav-item">
                <a className="nav-link" href="https://www.youtube.com/">
                  Home and Kitchen
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ">Gift Ideas</a>
              </li> */}
            </ul>
          </div>
          <div className="textDiv">
            New Launches from Mobile, Electronics and More | Shop Now
          </div>
        </div>
      </nav>
    </div>
  );
}
