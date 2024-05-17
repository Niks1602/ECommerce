import React, { useState, useEffect } from "react";
import data from "../data";
import NavBar from "../components/NavBar";
import NavBar2 from "../components/NavBar2";
import Footer from "../components/Footer";
import CARTARRAY from "../Cart Page/CartArray";
import FilterSortStyle from "./FilterSortStyle.css";
import { Link } from "react-router-dom";
import InfoPageID from "../InfoPageID/InfoPageID";
import * as RadioGroup from '@radix-ui/react-radio-group';

const fArray = ["all"];
let maxVal = 10000000;
let minVal = 0;

const FilterSort = () => {
  const [filterCategory, changefilterCategory] = useState(fArray);
  const [minValue, changeMinValue] = useState(minVal);
  const [maxValue, changeMaxValue] = useState(maxVal);
  const [allItemsMode, changeAllItemsMode] = useState(true);
  const [productData, changeProductData] = useState(data);
  let count = 0;

  useEffect(() => {
    console.log("useEffect Called");
    changefilterCategory(fArray);
  }, []);

  const filterProducts = (FilterCategory, modeNumber) => {
    if (FilterCategory !== "all" && modeNumber === 1) {
      changeAllItemsMode(false);
    }

    console.log("filterCategory.length " + filterCategory.length);
    console.log("filterCategory " + filterCategory);
    if (modeNumber === 1) {
      changefilterCategory((prevFilterCategory) => {
        if (prevFilterCategory.includes("all")) {
          prevFilterCategory = prevFilterCategory.filter(
            (category) => category !== "all"
          );
        }
        const updatedFilterCategory = [...prevFilterCategory, FilterCategory];
        return updatedFilterCategory;
      });
    } else {
      changefilterCategory((prevFilterCategory) => {
        const updatedFilterCategory = prevFilterCategory.filter(
          (category) => category !== FilterCategory
        );
        if (updatedFilterCategory.length === 0) {
          changeAllItemsMode(true);
          changefilterCategory(["all"]);
        }
        return updatedFilterCategory;
      });
    }

    console.log("filterCategory2 " + filterCategory);
  };

  const changeMinMaxValue = (min, max) => {
    minVal = min;
    maxVal = max;
    changeMinValue(min);
    changeMaxValue(max);
  };

  const addToCart = (id) => {
    let ID = id;
    if (!CARTARRAY.includes(ID)) CARTARRAY.push(ID);
    changeProductData(productData);
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
            
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                onChange={(e) =>
                  e.target.checked
                    ? filterProducts("all", 1)
                    : filterProducts("all", 2)
                }
                checked={allItemsMode}
              />
              <label class="form-check-label" for="flexCheckDefault">
                All Items
              </label>
            </div>

            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                onChange={(e) =>
                  e.target.checked
                    ? filterProducts("Mobile", 1)
                    : filterProducts("Mobile", 2)
                }
              />
              <label class="form-check-label" for="flexCheckDefault">
                Mobiles phones
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                onChange={(e) =>
                  e.target.checked
                    ? filterProducts("Home", 1)
                    : filterProducts("Home", 2)
                }
              />
              <label class="form-check-label" for="flexCheckDefault">
                Home and grocery
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                onChange={(e) =>
                  e.target.checked
                    ? filterProducts("Footwear", 1)
                    : filterProducts("Footwear", 2)
                }
              />
              <label class="form-check-label" for="flexCheckDefault">
                Footwears
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                onChange={(e) =>
                  e.target.checked
                    ? filterProducts("tools", 1)
                    : filterProducts("tools", 2)
                }
              />
              <label class="form-check-label" for="flexCheckDefault">
                Tools and Instruments
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                onChange={(e) =>
                  e.target.checked
                    ? filterProducts("clothes", 1)
                    : filterProducts("clothes", 2)
                }
              />
              <label class="form-check-label" for="flexCheckDefault">
                Cloths
              </label>
            </div>

            <br />

            <div>
              <h6>Filter Based on Price</h6>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                onChange={(e) =>
                  e.target.checked
                    ? changeMinMaxValue(15000, 100000)
                    : changeMinMaxValue(0, 100000)
                }
              />
              <label class="form-check-label" for="flexCheckDefault">
                More than Rs. 15000
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                onChange={(e) =>
                  e.target.checked
                    ? changeMinMaxValue(10000, 15000)
                    : changeMinMaxValue(0, 100000)
                }
              />
              <label class="form-check-label" for="flexCheckDefault">
                Rs. 10000 to Rs. 15000
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                onChange={(e) =>
                  e.target.checked
                    ? changeMinMaxValue(7500, 10000)
                    : changeMinMaxValue(0, 100000)
                }
              />
              <label class="form-check-label" for="flexCheckDefault">
                Rs. 7500 to Rs. 10000
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                onChange={(e) =>
                  e.target.checked
                    ? changeMinMaxValue(5000, 7500)
                    : changeMinMaxValue(0, 100000)
                }
              />
              <label class="form-check-label" for="flexCheckDefault">
                Rs. 5000 to Rs. 7500
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                onChange={(e) =>
                  e.target.checked
                    ? changeMinMaxValue(3000, 5000)
                    : changeMinMaxValue(0, 100000)
                }
              />
              <label class="form-check-label" for="flexCheckDefault">
                Rs. 3000 to Rs. 5000
              </label>
            </div>

            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                onChange={(e) =>
                  e.target.checked
                    ? changeMinMaxValue(2000, 3000)
                    : changeMinMaxValue(0, 100000)
                }
              />
              <label class="form-check-label" for="flexCheckDefault">
                Rs. 2000 to Rs. 3000
              </label>
            </div>
          </div>
        </div>

        <div className="cartPageContainer1">
          <div className="CategoryList1">
            Following are the Filtered Products
          </div>

          <div className="cartContainer1">
            {productData.map((item) => {
              return (
                ((filterCategory.includes(item.category) &&
                  item.price > minValue &&
                  item.price < maxValue) ||
                  (filterCategory.includes("all") &&
                    item.price > minValue &&
                    item.price < maxValue)) && (
                  <div className="cartItem1">
                    <div style={{ width: "8%" }}>
                      <h5>{++count}</h5>
                    </div>

                    <div className="imageDiv">
                      <img src={item.img} alt={item.name} className="image" />
                    </div>
                    <div id="NamePrice">
                      <h5>{item.name}</h5>
                      <h6>{item.price}</h6>
                    </div>
                    <div class="buttonsDiv">
                      <Link to="/proceedtopay">
                        <button
                          style={{ backgroundColor: "#ffc107", color: "black" }}
                          onClick={() => changeInfoPageID(item.id)}
                          class="buttons"
                        >
                          Proceed to Buy
                        </button>
                      </Link>
                    </div>
                    <br />
                    <div class="buttonsDiv">
                      <button
                        onClick={() => {
                          item.cartStatus = "In the Cart";
                          return addToCart(item.id - 1);
                        }}
                        style={{ backgroundColor: "#ffc107", color: "black" }}
                        class="buttons"
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
