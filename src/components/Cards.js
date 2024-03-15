import React from "react";
import "./CardsStyle.css";
import CARTARRAY from "../Cart Page/CartArray";
import data from "../data";

export default function Cards({ id, imagLink }) {
  const addToCart = () => {
    let ID = id;
    CARTARRAY.push(ID);
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
      <div className="addToCartDiv1" onClick={addToCart}>
        Add To Cart
      </div>
    </div>
  );
}
