import React from "react";
import Cards from "../components/Cards";
import ProductInfoStyle from "./ProductInfoStyle.css";
import data from "../data";
import NavBar from "../components/NavBar";
import NavBar2 from "../components/NavBar2";
import Footer from "../components/Footer";
import searchedItemId from "../components/SearchedItemID";


const ProductInfo = () => {
  let searchId = Number(searchedItemId[0]) - 1
  
  return (
    <>
      <NavBar />
      <NavBar2 />
      <div className="productInfoDiv">
        <div className="imgDiv1">
          <Cards
            id={searchId}
            imageLink="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/71a00703e8c14c76aa8471445a9eaf40_9366/Ultrabounce_Shoes_Blue_HP5783_HM1.jpg"
          />
          <div className="infoDiv1">
            <h5>Explore More About Product</h5>
            <h6>Lorem ipsum dolor sit amet.</h6>
            <h6>Lorem ipsum dolor sit amet.</h6>
            <h6>Lorem ipsum dolor sit amet.</h6>
            <h6>Lorem ipsum dolor sit amet.</h6>
            <div className="extraInfo">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Incidunt necessitatibus iusto illo dignissimos ipsa laborum.
                Quas quam fugit voluptatem. Sint minus consequatur omnis,
                quibusdam vero nesciunt corporis autem provident qui
                necessitatibus repudiandae expedita rerum, voluptas at. Velit
                amet dolores soluta atque odio! Tempora facilis, esse unde
                ducimus quos cum eveniet?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
