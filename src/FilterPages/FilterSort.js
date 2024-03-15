import React, { useState } from "react";
import data from "../data";
import NavBar from "../components/NavBar";
import NavBar2 from "../components/NavBar2";
import Footer from "../components/Footer";
import CARTARRAY from "../Cart Page/CartArray";

const FilterSort = () => {
  const [filterCategory, changefilterCategory] = useState("");
  let count = 0;
  const filterProducts = (FilterCategory) => {
    changefilterCategory(FilterCategory);
  };

  const addToCart = (id) => {
    let ID = id;
    CARTARRAY.push(ID);
  };

  return (
    <>
      <NavBar />
      <NavBar2 />
      <div className="cartPageContainer">
        <div className="CategoryList">
          <button onClick={() => filterProducts("")}>All Items</button>
          <button onClick={() => filterProducts("Mobile")}>
            Mobiles phones
          </button>
          <button onClick={() => filterProducts("Home")}>
            Home and grocery
          </button>
          <button onClick={() => filterProducts("clothes")}>Cloths</button>
          <button onClick={() => filterProducts("Footwear")}>Footwears</button>
          <button onClick={() => filterProducts("tools")}>
            Tools and Instruments
          </button>
        </div>

        <div className="cartContainer">
          {data.map(
            (item) =>
              (filterCategory === item.category || filterCategory === "") && (
                <div className="cartItem">
                  <h5>{++count}</h5>
                  <img src={item.img} alt={item.name} />
                  <div>
                    <h5>{item.name}</h5>
                    <h6>{item.price}</h6>
                  </div>
                  <button
                    style={{ backgroundColor: "#ffc107", color: "black" }}
                  >
                    Proceed to Buy
                  </button>
                  <button
                    onClick={()=> addToCart(item.id)}
                    style={{ backgroundColor: "#ffc107", color: "black" }}
                  >
                    Add to Cart
                  </button>
                </div>
              )
          )}
        </div>
      </div>
      <div className="thirdDiv">
        <Footer />
      </div>
      <div className="lastDiv">
        <h4>COPYRIGHT SITE.COM ALL RIGHTS RESERVED</h4>
      </div>
    </>
  );
};

export default FilterSort;
