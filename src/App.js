 import React from "react";
 import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import UniqueColor from "./components/UniqueColor"
function App() {
  return (
    <div className="App">
      {/**NAVBAR */}
      <Navbar />
      {/* SLIDER */}
      <Slider />
      {/* UNIQUE SECTION */}
      <UniqueColor />
    </div>
  );
}

export default App;
