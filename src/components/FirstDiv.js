import React from "react";
import "./Firstdiv.css";
export default function FirstDiv() {
  return (
    <>
      <div className="firstDiv">
        <div className="leftDiv">
          {/* **************** */}
          <div
            id="carouselExampleAutoplaying"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://cdn6.f-cdn.com/contestentries/1399898/20745766/5b80297378cf7_thumb900.jpg"
                  className="d-block w-100"
                  alt="Slide 1"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://i.pinimg.com/736x/f1/87/c5/f187c529afece931da168cc3735e2883.jpg"
                  className="d-block w-100"
                  alt="Slide 2"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://img.freepik.com/free-vector/realistic-horizontal-sale-banner-template-with-photo_23-2149017940.jpg?w=1380&t=st=1707451548~exp=1707452148~hmac=bc4b09a961fbe005dd01189a1c68a9cb36373b2be51df9b7d52fc239094ce69b"
                  className="d-block w-100"
                  alt="Slide 3"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          {/* ****************** */}
        </div>

        <div className="rightDiv">
          <div className="rights_firstDiv">
            <h2>Under 70 | Multiple brands | Combo Pack and much More</h2>
          </div>
          <div className="rights_secondDiv">
            <img
              src="https://gd.image-gmkt.com/li/317/912/1763912317.g_520-w-st_g.jpg"
              alt=""
            />
          </div>
          <div className="rights_thirdDiv">
            <h5>See All Offers</h5>
          </div>
        </div>
      </div>
    </>
  );
}
