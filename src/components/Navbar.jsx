import React, { useState } from "react";
import "../css/Navbar.css";
import BrandLogo from "../Assets/Navbar/brandLogo.png";
import { VscSearch } from "react-icons/vsc";
import { FaFacebookF, FaPinterestP, FaTimes } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  const toggleIcons = () =>{
      setToggle(!toggle)
      console.log("clicked")
  }
  return (
    <div className="header">
      <div className="navbar">
        <div className="hamburger">
          <GiHamburgerMenu />
        </div>
        <div className="navbar__brand">
          {/**BRAND LOGO */}
          <img src={BrandLogo} alt={BrandLogo} />
        </div>
        <div className="navbar__list">
          <ul>
            <li>home</li>
            <li>
              {" "}
              products <BsChevronDown className="arrowBottom" />
            </li>
            <li>about us</li>
            <li>our stores</li>
            <li>contact us</li>
          </ul>
        </div>
        <div className="navbar__icons">
          <div className="search" >
            {toggle ? <FaTimes onClick={toggleIcons} /> : <VscSearch onClick={toggleIcons} />}
          </div>
          <div className="facebook">
            {" "}
            <FaFacebookF />
          </div>
          <div className="instagram">
            <AiOutlineInstagram />
          </div>
          <div className="pintrest">
            <FaPinterestP />
          </div>
          <input type="text" placeholder="Search." className={toggle ? "opacity" : ""} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
