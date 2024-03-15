import "./App.css";
import Cards from "./components/Cards";
import FirstDiv from "./components/FirstDiv";
import Footer from "./components/Footer";
import HiddenNavBar from "./components/HiddenNavBar";
import NavBar from "./components/NavBar";
import NavBar2 from "./components/NavBar2";
import SmallCards from "./components/SmallCards";

function App() {
  return (
    <>
      <NavBar />
      <HiddenNavBar />
      <NavBar2 />

      <FirstDiv />
      <div className="headind1">
        <br />
        <h1>Trending...</h1>
      </div>
      
      <div className="secondDiv bigCardsDiv">
        <Cards imageLink="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/71a00703e8c14c76aa8471445a9eaf40_9366/Ultrabounce_Shoes_Blue_HP5783_HM1.jpg" />
        <Cards imageLink="https://m.media-amazon.com/images/I/71DBklVte9L._AC_UY1100_.jpg" />
        <Cards imageLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOD9U7ARucEmLH32oHbkEVb9j0p1RAGlNzBPct26WtXzEzy8W8oxhHuWly-TFrrngSQVQ&usqp=CAU" />
      </div>

      <div className="headind1">
        <br />
        <h1>Our Latest Arrivals.</h1>
      </div>
      <div className="secondDiv">
        <Cards imageLink="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/71a00703e8c14c76aa8471445a9eaf40_9366/Ultrabounce_Shoes_Blue_HP5783_HM1.jpg" />
        <Cards imageLink="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/71a00703e8c14c76aa8471445a9eaf40_9366/Ultrabounce_Shoes_Blue_HP5783_HM1.jpg" />
        <Cards imageLink="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/71a00703e8c14c76aa8471445a9eaf40_9366/Ultrabounce_Shoes_Blue_HP5783_HM1.jpg" />
      </div>

      <div className="secondDiv">
        <Cards imageLink="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/71a00703e8c14c76aa8471445a9eaf40_9366/Ultrabounce_Shoes_Blue_HP5783_HM1.jpg" />
        <Cards imageLink="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/71a00703e8c14c76aa8471445a9eaf40_9366/Ultrabounce_Shoes_Blue_HP5783_HM1.jpg" />
        <Cards imageLink="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/71a00703e8c14c76aa8471445a9eaf40_9366/Ultrabounce_Shoes_Blue_HP5783_HM1.jpg" />
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
}

export default App;
