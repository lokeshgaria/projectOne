import React from "react";
import Brands from "../Brands";
import Finishes from "../Finishes";
import Frenchise from "../Frenchise";
import Navbar from "../Navbar";
import Slider from "../Slider";
import Testimonials from "../Testimonials";
import UniqueColor from "../UniqueColor";
import Footer from "../Footer"

function Homepage() {
  return (
    <div>
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

export default Homepage;
