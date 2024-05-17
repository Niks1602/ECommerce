import React from "react";
import ProceedToPay from "../ProceedToPay/ProceedToPay";
import ProductInfo from "../ProductInfoPage/ProductInfo";
import Cards from "./Cards";
import FirstDiv from "./FirstDiv";
import Footer from "./Footer";
import HiddenNavBar from "./HiddenNavBar";
import NavBar from "./NavBar";
import NavBar2 from "./NavBar2";
import SmallCards from "./SmallCards";

const Home = () => {
  const arr = [];
  return (
    <>
      <NavBar />
      <NavBar2 />
      <FirstDiv />
      <div className="headind1">
        <br />
        <h1>Trending...</h1>
      </div>

      <div className="secondDiv bigCardsDiv">
        <Cards
          id={1}
          imageLink="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/71a00703e8c14c76aa8471445a9eaf40_9366/Ultrabounce_Shoes_Blue_HP5783_HM1.jpg"
        />
        <Cards
          id={2}
          imageLink="https://m.media-amazon.com/images/I/71DBklVte9L._AC_UY1100_.jpg"
        />
        <Cards
          id={3}
          imageLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOD9U7ARucEmLH32oHbkEVb9j0p1RAGlNzBPct26WtXzEzy8W8oxhHuWly-TFrrngSQVQ&usqp=CAU"
        />
      </div>

      <div className="headind1">
        <br />
        <h1>Our Latest Arrivals.</h1>
      </div>
      <div className="secondDiv">
        <Cards
          id={4}
          imageLink="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/71a00703e8c14c76aa8471445a9eaf40_9366/Ultrabounce_Shoes_Blue_HP5783_HM1.jpg"
        />
        <Cards
          id={5}
          imageLink="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/71a00703e8c14c76aa8471445a9eaf40_9366/Ultrabounce_Shoes_Blue_HP5783_HM1.jpg"
        />
        <Cards
          id={6}
          imageLink="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/71a00703e8c14c76aa8471445a9eaf40_9366/Ultrabounce_Shoes_Blue_HP5783_HM1.jpg"
        />
      </div>

      <div className="secondDiv">
        <Cards
          id={7}
          imageLink="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/71a00703e8c14c76aa8471445a9eaf40_9366/Ultrabounce_Shoes_Blue_HP5783_HM1.jpg"
        />
        <Cards
          id={8}
          imageLink="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/71a00703e8c14c76aa8471445a9eaf40_9366/Ultrabounce_Shoes_Blue_HP5783_HM1.jpg"
        />
        <Cards
          id={9}
          imageLink="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/71a00703e8c14c76aa8471445a9eaf40_9366/Ultrabounce_Shoes_Blue_HP5783_HM1.jpg"
        />
      </div>

      <div className="secondDiv smallCardsParentDiv">
        <SmallCards imageLink1="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/71a00703e8c14c76aa8471445a9eaf40_9366/Ultrabounce_Shoes_Blue_HP5783_HM1.jpg" />
        <SmallCards imageLink1="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/71a00703e8c14c76aa8471445a9eaf40_9366/Ultrabounce_Shoes_Blue_HP5783_HM1.jpg" />
        <SmallCards imageLink1="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/71a00703e8c14c76aa8471445a9eaf40_9366/Ultrabounce_Shoes_Blue_HP5783_HM1.jpg" />
        <SmallCards imageLink1="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/71a00703e8c14c76aa8471445a9eaf40_9366/Ultrabounce_Shoes_Blue_HP5783_HM1.jpg" />
      </div>

      <div className="secondDiv smallCardsParentDiv">
        <SmallCards imageLink1="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/71a00703e8c14c76aa8471445a9eaf40_9366/Ultrabounce_Shoes_Blue_HP5783_HM1.jpg" />
        <SmallCards imageLink1="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/71a00703e8c14c76aa8471445a9eaf40_9366/Ultrabounce_Shoes_Blue_HP5783_HM1.jpg" />
        <SmallCards imageLink1="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/71a00703e8c14c76aa8471445a9eaf40_9366/Ultrabounce_Shoes_Blue_HP5783_HM1.jpg" />
        <SmallCards imageLink1="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/71a00703e8c14c76aa8471445a9eaf40_9366/Ultrabounce_Shoes_Blue_HP5783_HM1.jpg" />
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

export default Home;
