import React from "react";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import UniqueColor from "./components/UniqueColor";
import Brands from "./components/Brands"
import Finishes from "./components/Finishes";
import Footer from "./components/Footer";

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
      {/**FOOTER */}
      <Footer />
    </div>
  );
}

export default App;
