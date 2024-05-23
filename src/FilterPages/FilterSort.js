import React, { useState, useEffect } from "react";
import data from "../data";
import NavBar from "../components/NavBar";
import NavBar2 from "../components/NavBar2";
import Footer from "../components/Footer";
import CARTARRAY from "../Cart Page/CartArray";
import FilterSortStyle from "./FilterSortStyle.css";
import { Link } from "react-router-dom";
import InfoPageID from "../InfoPageID/InfoPageID";
import * as RadioGroup from "@radix-ui/react-radio-group";

let maxVal = 10000000;
let minVal = 0;
const AllCategoryArray = ["Mobile", "Home", "Footwear", "tools", "clothes"];

const FilterSort = () => {
  const [filterCategory, setFilterCategory] = useState([]);
  const [minValue, setMinValue] = useState(minVal);
  const [maxValue, setMaxValue] = useState(maxVal);
  const [allItemsMode, setAllItemsMode] = useState(true);
  const [productData, setProductData] = useState(data);

  useEffect(() => {
    console.log("useEffect Called");
    setFilterCategory(AllCategoryArray);
  }, []);

  const filterProducts = (FilterCategory, event) => {
    let updatedCategories = [...filterCategory];

    if (FilterCategory === "all") {
      if (event.target.checked) {
        updatedCategories = AllCategoryArray;
        setAllItemsMode(true);
      } else {
        updatedCategories = [];
        setAllItemsMode(false);
      }
    } else {
      if (event.target.checked) {
        updatedCategories.push(FilterCategory);
        if (updatedCategories.length === AllCategoryArray.length) {
          setAllItemsMode(true);
        } else {
          setAllItemsMode(false);
        }
      } else {
        updatedCategories = updatedCategories.filter(
          (category) => category !== FilterCategory
        );
        setAllItemsMode(false);
      }
    }

    setFilterCategory(updatedCategories);
  };

  const changeMinMaxValue = (min, max) => {
    setMinValue(min);
    setMaxValue(max);
  };

  const addToCart = (id) => {
    if (!CARTARRAY.includes(id)) CARTARRAY.push(id);
    setProductData([...productData]);
  };

  const changeInfoPageID = (id) => {
    InfoPageID[0] = id;
    console.log(InfoPageID);
  };

  return (
    <>
      <div style={{ zIndex: "1000", position: "relative" }}>
        <NavBar />
        <NavBar2 />
      </div>

      <div className="MAIN1">
        <div className="filterSortMenu1">
          <div className="subfilterSortMenu1">
            <div className="selectCategoryDiv">
              <h6>Select Category</h6>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefaultAll"
                checked={allItemsMode}
                onChange={(event) => filterProducts("all", event)}
              />
              <label className="form-check-label" htmlFor="flexCheckDefaultAll">
                All Items
              </label>
            </div>

            {AllCategoryArray.map((category) => (
              <div className="form-check" key={category}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={`flexCheckDefault${category}`}
                  checked={filterCategory.includes(category)}
                  onChange={(event) => filterProducts(category, event)}
                />
                <label
                  className="form-check-label"
                  htmlFor={`flexCheckDefault${category}`}
                >
                  {category}
                </label>
              </div>
            ))}

            <br />

            <div>
            <h6>Filter Based on Price</h6>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckDefaultPrice1"
              onChange={(e) =>
                e.target.checked
                  ? changeMinMaxValue(15000, 100000)
                  : changeMinMaxValue(0, 100000)
              }
            />
            <label className="form-check-label" htmlFor="flexCheckDefaultPrice1">
              More than Rs. 15000
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckDefaultPrice2"
              onChange={(e) =>
                e.target.checked
                  ? changeMinMaxValue(10000, 15000)
                  : changeMinMaxValue(0, 100000)
              }
            />
            <label className="form-check-label" htmlFor="flexCheckDefaultPrice2">
              Rs. 10000 to Rs. 15000
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckDefaultPrice3"
              onChange={(e) =>
                e.target.checked
                  ? changeMinMaxValue(7500, 10000)
                  : changeMinMaxValue(0, 100000)
              }
            />
            <label className="form-check-label" htmlFor="flexCheckDefaultPrice3">
              Rs. 7500 to Rs. 10000
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckDefaultPrice4"
              onChange={(e) =>
                e.target.checked
                  ? changeMinMaxValue(5000, 7500)
                  : changeMinMaxValue(0, 100000)
              }
            />
            <label className="form-check-label" htmlFor="flexCheckDefaultPrice4">
              Rs. 5000 to Rs. 7500
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckDefaultPrice5"
              onChange={(e) =>
                e.target.checked
                  ? changeMinMaxValue(3000, 5000)
                  : changeMinMaxValue(0, 100000)
              }
            />
            <label className="form-check-label" htmlFor="flexCheckDefaultPrice5">
              Rs. 3000 to Rs. 5000
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckDefaultPrice6"
              onChange={(e) =>
                e.target.checked
                  ? changeMinMaxValue(2000, 3000)
                  : changeMinMaxValue(0, 100000)
              }
            />
            <label className="form-check-label" htmlFor="flexCheckDefaultPrice6">
              Rs. 2000 to Rs. 3000
            </label>
          </div>
          </div>

          <br />

          
        </div>

        <div className="cartPageContainer1">
          <div className="CategoryList1">
            Following are the Filtered Products
          </div>

          <div className="cartContainer1">
            {productData.map((item, index) => {
              return (
                filterCategory.includes(item.category) &&
                item.price > minValue &&
                item.price < maxValue && (
                  <div className="cartItem1" key={item.id}>
                    <div style={{ width: "8%" }}>
                      <h5>{index + 1}</h5>
                    </div>

                    <div className="imageDiv">
                      <img src={item.img} alt={item.name} className="image" />
                    </div>
                    <div id="NamePrice">
                      <h5>{item.name}</h5>
                      <h6>{item.price}</h6>
                    </div>
                    <div className="buttonsDiv">
                      <Link to="/proceedtopay">
                        <button
                          style={{ backgroundColor: "#ffc107", color: "black" }}
                          onClick={() => changeInfoPageID(item.id)}
                          className="buttons"
                        >
                          Proceed to Buy
                        </button>
                      </Link>
                    </div>
                    <br />
                    <div className="buttonsDiv">
                      <button
                        onClick={() => {
                          item.cartStatus = "In the Cart";
                          addToCart(item.id - 1);
                        }}
                        style={{ backgroundColor: "#ffc107", color: "black" }}
                        className="buttons"
                      >
                        {item.cartStatus}
                      </button>
                    </div>
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>

      <div className="thirdDiv" style={{ zIndex: "2000" }}>
        <Footer />
      </div>
      <div className="lastDiv" style={{ zIndex: "2000" }}>
        <h4>COPYRIGHT SITE.COM ALL RIGHTS RESERVED</h4>
      </div>
    </>
  );
};

export default FilterSort;
