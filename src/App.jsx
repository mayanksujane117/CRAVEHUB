import React from "react";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Offer from "./components/Offer";
import Explore from "./components/Explore";
import About from "./components/About";
import Featured from "./components/Featured";
import Footer from "./components/Footer";


function App() {
  return (
    <div>

      <div id="#"><Hero/></div>
      <div id="Product"><Products/></div>
      <div Offer><Offer/></div>
      <div id="Explore"><Explore/></div>
      <div id="About"><About/></div>
      <div id="Featured"><Featured/></div>
      <div id="Contact"><Footer/></div>
      
      
      
    </div>
  );
}

export default App;