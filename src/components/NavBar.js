import React, { useState } from "react";
import SignUp from "../SignUp_Login_Page/SignUp";
import "./Navbar.css";
import { Link } from "react-router-dom";
import data from "../data";
import searchedItemId from "./SearchedItemID";

export default function NavBar() {
  const [sidebarDisplayStyle, changeSidebarDisplayStyle] = useState("none");
  const [loginPageDisplayStyle, changeloginPageDisplayStyle] = useState("none");
  const [serchedItems, changeSearchedItems] = useState([]);

  function displaySideBar() {
    changeSidebarDisplayStyle("flex");
  }

  function hideSideBar() {
    changeSidebarDisplayStyle("none");
  }

  function displayMainSignInPage() {
    changeloginPageDisplayStyle("flex");
  }

  function hideMainSignInPage() {
    changeloginPageDisplayStyle("none");
  }

  const searchProducts = (event) => {
    // event.preventDefault();
    // data.map((item) => {
    //   if (item.name.indexOf("Shoes") !== -1)
    //     changeSearchedItems((prev) => {
    //       const updatedFilterCategory = [...prev, item];
    //       return updatedFilterCategory;
    //     });
    // });

    event.preventDefault();

    const searchTerm = event.target.form[0].value;
    if (searchTerm.length === 0) {
      changeSearchedItems([]);
    }

    if (searchTerm.length !== 0) {
      const filteredItems = data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      changeSearchedItems(filteredItems);
    }
  };
  

  const changeSearchedItemId = (id) => {
    searchedItemId[0] = id
    console.log("searchedItemId =" + searchedItemId[0])
    // return searchedItemId;
  };
  return (
    <div>
      <SignUp
        displayStyle={loginPageDisplayStyle}
        closeFun={hideMainSignInPage}
      />
      <div class="hiddenParentDiv" style={{ display: sidebarDisplayStyle }}>
        <div className="LeftDiv">
          <i
            class="fa-sharp fa-solid fa-circle-xmark fa-2xl LeftDiv_i"
            onClick={hideSideBar}
          ></i>
        </div>
        <div className="RightDiv">
          <div className="helloSignIn">
            <i class="fa-solid fa-user fa-2xl" style={{ color: "#ffffff" }}></i>
            Hello, Sign In
          </div>
          <div>
            <li className="hiddenNavSubDiv">GPS Location</li>
            <li className="hiddenNavSubDiv">Select Language</li>
            <Link to="/Cart">
              <li className="hiddenNavSubDiv">Add to Cart</li>
            </Link>
          </div>
          <hr />
          <div>
            <li className="hiddenNavSubDiv">Best Sellers</li>
            <li className="hiddenNavSubDiv">Todays Deal</li>
            <li className="hiddenNavSubDiv">Mobiles</li>
            <li className="hiddenNavSubDiv">Home and Kitchen</li>
            <li className="hiddenNavSubDiv">Gift Ideas</li>
          </div>
        </div>
      </div>

      <nav className="navbar">
        {/* ************ */}
        <div className="logoDiv">
          <img
            src="https://ecart.com/assets/images/logos/logo-ecart.svg"
            alt=""
            style={{ width: "80px" }}
          />
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
                onChange={searchProducts}
              />
              <button
                className="btn btn-outline-success"
                type="submit"
                onClick={searchProducts}
              >
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
        <div className="signInDiv toBeHidden" onClick={displayMainSignInPage}>
          <h6>SIGN IN</h6>
        </div>
        {/* ************ */}
        <div className="addToCartDiv toBeHidden">
          <Link to="/Cart" style={{ textDecoration: "none", color: "black" }}>
            <h6>
              <i className="fa-solid fa-cart-shopping fa-2xl"></i>
              My Cart
            </h6>
          </Link>
        </div>
        {/* ************ */}
        <div className="menuBarIcon" onClick={displaySideBar}>
          <i className="fa-solid fa-bars fa-2xl"></i>
        </div>
      </nav>
      <div className="searchedItems">
        {serchedItems.map((item) => {
          return (
            <Link
              to="/productinfo"
              onClick={() => changeSearchedItemId(item.id)}
              key={item.id}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div>{item.name}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
