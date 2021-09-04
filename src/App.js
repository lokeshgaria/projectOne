import React from "react";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import UniqueColor from "./components/UniqueColor";
import Brands from "./components/Brands"

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
    </div>
  );
}

export default App;
