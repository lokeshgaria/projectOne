import React, { useState } from "react";
import "../css/Navbar.css";
import BrandLogo from "../Assets/Navbar/newBrandlogo.png";
import { VscSearch } from "react-icons/vsc";
import { FaFacebookF, FaPinterestP, FaTimes } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";


export const  NavbarLogo = () => {
  return (
    
    <div className="navbar__brand">
    {/**BRAND LOGO */}
    <div className="brandImg">
      
      <img src={BrandLogo} alt={BrandLogo} />
    </div>
    <div className="logoTextDiv">
    <p className="logo_text">
      <span>Eco</span>Vision
    </p>
    
      <small>Evolution of new India</small>
    </div>
    
  
  </div>
  )
} 
function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [toggleHam, setHam] = useState(false);
  const [drop, setDrop] = useState(false);
  const toggleIcons = () => {
    setToggle(!toggle);
    console.log("clicked");
  };
  return (
    <div className="header">
      <div className="navbar">
        <div className="hamburger">
          {toggleHam ? (
            <FaTimes onClick={() => setHam(!toggleHam)} />
          ) : (
            <GiHamburgerMenu onClick={() => setHam(!toggleHam)} />
          )}
        </div>
        <div className={toggleHam ? "shiftRight productDisc" : "productDisc"}>
          <ul className="productList">
            <li>
              <NavLink to="/product-category/cluster-tone">Cluster Stone</NavLink>
            </li>
            <li>
              <NavLink to="/product-category/bricks">Bricks</NavLink>
            </li>
            <li>Stones</li>
            <li>Laser Cut</li>
            <li>Panel Format</li>
            <li>Nano Topping</li>
            <li>Flooring</li>
            <li>Vertical Stamping Textures</li>
            <li>Architectural Grilles</li>
          </ul>
        </div>

       <NavbarLogo />
        <div className="navbar__list">
          <ul>
            <li>
            <NavLink to="/">home</NavLink>
            </li>
            <li
              className="displayRow"
              // onBlur={() => setDrop(false)}
              onClick={() => setDrop(!drop)}
            >
              products <BsChevronDown className="arrowBottom" />
            </li>
            <li>about us</li>
            <li>our stores</li>
            <li>contact us</li>
          </ul>

          <div className={drop ? "hoverEfect productDisc" : "productDisc"}>
            <ul className="productList">
              <li>
                <NavLink to="/product-category/cluster-tone">Cluster Stone</NavLink>
              </li>
              <li>
              <NavLink to="/product-category/bricks">Bricks</NavLink>
              </li>
              <li>Stones</li>
              <li>Laser Cut</li>
              <li>Panel Format</li>
              <li>Nano Topping</li>
              <li>Flooring</li>
              <li>Vertical Stamping Textures</li>
              <li>Architectural Grilles</li>
            </ul>
          </div>
        </div>
        <div className="navbar__icons">
          <div className="search">
            {toggle ? (
              <FaTimes onClick={toggleIcons} />
            ) : (
              <VscSearch onClick={toggleIcons} />
            )}
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
        </div>
        <div className={toggle ? "display searchDiv" : "searchDiv"}>
          <form action="" className="searchform">
            <input type="text" placeholder="Search keyword..." />
            <button type="submit">sub</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
