import React, { useState } from "react";
import "./CardsStyle.css";
import CARTARRAY from "../Cart Page/CartArray";
import data from "../data";

export default function Cards({ id, imagLink }) {
  const[cartState, changeCartState] = useState(data[id].cartStatus)
  const addToCart = () => {
    let ID = id;
    if(!CARTARRAY.includes(ID))
    CARTARRAY.push(ID);
    data[id].cartStatus = 'In the Cart'
    changeCartState(data[id].cartStatus)
    
  };

  return (
    <div className="secondDivCard">
      <div className="imgDiv">
        <img src={data[id].img} alt="Not Found" />
      </div>
      <div className="itemInfo">
        <h3>{data[id].name}</h3>
        {/* <hr /> */}
        <h5>{data[id].price}</h5>
        {/* <hr /> */}
        <div>
          <i class="fa-solid fa-star fa-xl" style={{ color: "#FFD43B" }}></i>
          <i class="fa-solid fa-star fa-xl" style={{ color: "#FFD43B" }}></i>
          <i class="fa-solid fa-star fa-xl" style={{ color: "#FFD43B" }}></i>
          <i class="fa-solid fa-star fa-xl" style={{ color: "#FFD43B" }}></i>
          <i class="fa-regular fa-star fa-xl"></i>
        </div>
      </div>
      <div className="addToCartDiv1 a" onClick={addToCart}>
        {cartState}
      </div>
    </div>
    
  );
}
