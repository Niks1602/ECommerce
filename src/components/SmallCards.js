import React from "react";
import "./SmallCardsStyle.css";
export default function SmallCards(props) {
  return (
    <div className="secondDivCard1">
      <div className="imgDiv1">
        <img src={props.imageLink1} alt="Not Found" />
      </div>
      <div className="itemInfo1">
        <h4>Men shoes</h4>
        {/* <hr /> */}
        <h6>Rs.999</h6>
        {/* <hr /> */}
        <div>
          <i class="fa-regular fa-star fa"></i>
          <i class="fa-regular fa-star fa"></i>
          <i class="fa-regular fa-star fa"></i>
          <i class="fa-regular fa-star fa"></i>
          <i class="fa-regular fa-star fa"></i>
        </div>
      </div>
    </div>
  );
}
