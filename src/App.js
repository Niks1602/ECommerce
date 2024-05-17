import "./App.css";
import Cards from "./components/Cards";
import FirstDiv from "./components/FirstDiv";
import Footer from "./components/Footer";
import HiddenNavBar from "./components/HiddenNavBar";
import NavBar from "./components/NavBar";
import NavBar2 from "./components/NavBar2";
import SmallCards from "./components/SmallCards";
// import SideNavBar from "./HiddenNavBar/SideNavBar";
import { Routes, Route } from "react-router-dom";
import Cart from "./Cart Page/Cart";
import Home from "./components/Home";
import FilterSort from "./FilterPages/FilterSort";
import ProductInfo from "./ProductInfoPage/ProductInfo";
import { Theme } from '@radix-ui/themes';
import Proceedtopay from "./ProceedToPay/ProceedToPay";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/filtersort" element={<FilterSort />}></Route>
        <Route path="/productinfo" element={<ProductInfo/>}></Route>
        <Route path="/proceedtopay" element={<Proceedtopay/>}></Route>
      </Routes>
    </>
  );
}

export default App;
