import React, { useState } from "react";
import CARTARRAY from "./CartArray";
import CartStyle from "./CartStyle.css";
import data from "../data";
import NavBar from "../components/NavBar";
import NavBar2 from "../components/NavBar2";
import Footer from "../components/Footer";

const Cart = () => {
  const uniqueArrsay = [...new Set(CARTARRAY)];
  const [cartArray, setCartArray] = useState(CARTARRAY);

  const removeItem = (count) => {
    const updatedCartArray = cartArray.filter((item) => item !== count);
    setCartArray(updatedCartArray);
  };

  return (
    <>
      <NavBar />
      <NavBar2 />
      <div className="cartPageContainer">
        <div className="cartContainer">
          {cartArray.length === 0 ? (
            <div>
              <h2>The cart is Empty</h2>
              <p>Continue Searching your Favourite Products...</p>
            </div>
          ) : (
            <>
              <h5>Continue Buying your Favourite Products</h5>
              {cartArray.map((count, index) => (
              <div className="cartItem" key={index}>
                <h5>{index + 1}</h5>
                <img src={data[count].img} alt={data[count].name} />
                <div>
                  <h5>{data[count].name}</h5>
                  <h6>{data[count].price}</h6>
                </div>
                <button style={{ backgroundColor: "#ffc107", color: "black" }}>
                  Proceed to Buy
                </button>
                <button onClick={() => removeItem(count)}>
                  Remove from cart
                </button>
              </div>
              ))}
              </>
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

export default Cart;
