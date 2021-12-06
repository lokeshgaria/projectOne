import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "./About.css";

function About() {
  return (
    <>
      <Navbar />
      <div className="about_us ">
        <div className="about_usBanner">
          <div className="content">
            <h1 className="size5">Get to Know IceStone</h1>
            <p className="size3">Curators, Changemakers, Craftspeople</p>
          </div>
        </div>

        {/** OUR founding idea */}
        <div className="content_div  ">
          <div className="container flex_container">
            <div className="leftside">
              <h1>Our Founding Idea</h1>
              <p className="w-90 text-size">
                IceStone began in 2003 with a simple concept; transform waste
                glass into something beautiful. The founders set out to create a
                business that integrated sustainable, responsible practices from
                process to product, and to provide a high design solution that
                would address a real need. With capital investment from over 70
                progressive angel investors including Ben Cohen from Ben &
                Jerry’s, activist and author Dal LaMagna, the founder of
                Tweezerman, Greg Steltenpohl from Odwalla, and Gary Hirshberg
                from Stonyfield Farm, IceStone recycled glass surfaces were
                brought to market. Since then, IceStone has diverted over 17
                million pounds of glass from landfills, and has made its
                employees partners of the company, all while manufacturing our
                product in the historic Brooklyn Navy Yard. Today, IceStone’s
                signature recycled glass and cement products remain an icon of
                the new countertop industry, delivering unparalleled style that
                brings design projects to life.
              </p>
            </div>
            <div className="rightSide ">
              <img
                src="https://icestoneusa.com/wp-content/uploads/2020/07/Our-Founding-Idea.jpg"
                width="100%"
                alt="tiles"
              />
            </div>
          </div>
        </div>
        <div className="content_div bglight ">
          <div className="container flex_container flex-rev">
            <div className="leftside">
              <h1>IceStone: A Founding B-Corporation</h1>
              <p className="w-90 text-size">
                IceStone has been at the forefront of the B-Corporation movement
                that seeks to change the way companies define success. Certified
                B-Corporations are businesses that meet the highest standards of
                verified social and environmental performance, public
              </p>
              <p className="w-90 text-size">
                transparency, and legal accountability to balance profit and
                purpose. B-Corps are accelerating a global culture shift to
                build a more inclusive and sustainable economy. Today there are
              </p>
              <p className="w-90 text-size">
                more than 2,600 Certified B-Corporations across more than 150
                industries and 50 countries, unified by one common goal: to
                redefine success in business.
              </p>
            </div>
            <div className="rightSide ">
              <img
                src="https://icestoneusa.com/wp-content/uploads/2020/07/B-Corp-Logo-1-614x1024.jpg"
                width="40%"
                alt="tiles"
                height="80%"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
