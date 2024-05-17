import React, { useState } from "react";
import CARTARRAY from "./CartArray";
import CartStyle from "./CartStyle.css";
import data from "../data";
import NavBar from "../components/NavBar";
import NavBar2 from "../components/NavBar2";
import Footer from "../components/Footer";
import Proceedtopay from "../ProceedToPay/ProceedToPay";
import { Link } from "react-router-dom";
import InfoPageID from "../InfoPageID/InfoPageID";

const Cart = () => {
  const uniqueArrsay = [...new Set(CARTARRAY)];
  const [cartArray, setCartArray] = useState(CARTARRAY);

  const removeItem = (count, index) => {
    const updatedCartArray = cartArray.filter((item) => item !== count);
    setCartArray(updatedCartArray);
    const x = CARTARRAY.splice(index, 1);
    data[count].cartStatus = "Add to Cart";
  };

  const changeInfoPageID1 = (id)=>{
    InfoPageID[0] = id;
    console.log(InfoPageID)
  }

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
                  <div style={{ width: "8%" }}>
                    <h5>{index + 1}</h5>
                  </div>
                  <div className="imageDiv">
                    <img
                      src={data[count].img}
                      alt={data[count].name}
                      className="image"
                    />
                  </div>
                  <div id="NamePrice1">
                    <h5>{data[count].name}</h5>
                    <h6>{data[count].price}</h6>
                  </div>
                  <div>
                    <Link to="/proceedtopay">
                      <button
                        style={{ backgroundColor: "#ffc107", color: "black" }}
                        onClick={()=>changeInfoPageID1(data[count].id)}
                      >
                        Proceed to Buy
                      </button>
                    </Link>
                  </div>
                  <br />
                  <div>
                    <button onClick={() => removeItem(count, index)}>
                      Remove from cart
                    </button>
                  </div>
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
