import React from "react";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import UniqueColor from "./components/UniqueColor";
import Brands from "./components/Brands"
import Finishes from "./components/Finishes";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials"
import Frenchise from "./components/Frenchise";

function App() {
  return (
    <div className="App">
      {/**NAVBAR */}
      <Navbar />
      {/* SLIDER */}
      <Slider />
      {/* UNIQUE SECTION */}
      <UniqueColor />
      {/**brand section */}
      <Brands />
     
      {/* FINISHES   */}
      <Finishes />
       {/* TESTIMONIALS */}
       <Testimonials />
      <Frenchise />
      {/**FOOTER */}
      <Footer />
    </div>
  );
}

export default App;
