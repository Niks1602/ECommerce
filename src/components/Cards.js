import React from "react";
import "./CardsStyle.css";
export default function Cards(props) {
  return (
    <div className="secondDivCard">
      <div className="imgDiv">
        <img src={props.imageLink} alt="Not Found" />
      </div>
      <div className="itemInfo">
        <h3>Men shoes</h3>
        {/* <hr /> */}
        <h5>Rs.999</h5>
        {/* <hr /> */}
        <div>
          <i class="fa-regular fa-star fa-xl"></i>
          <i class="fa-regular fa-star fa-xl"></i>
          <i class="fa-regular fa-star fa-xl"></i>
          <i class="fa-regular fa-star fa-xl"></i>
          <i class="fa-regular fa-star fa-xl"></i>
        </div>
      </div>
    </div>
  );
}
