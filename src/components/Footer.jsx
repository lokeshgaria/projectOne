import React from "react";
import "../css/Footer.css";
 
import { IoIosPin } from "react-icons/io";
import { FiPhone } from "react-icons/fi";
 
import {
  FaFacebookF,
  FaInstagram,
  
  FaWhatsapp,
} from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
//FOOTER IMAGES
import gallery1 from "../Assets/footer/gallry1.jpg";
import gallery2 from "../Assets/footer/gallery2.jpg";
import gallery3 from "../Assets/footer/gallery3.jpg";
import gallery4 from "../Assets/footer/gallery4.jpg";
import gallery5 from "../Assets/footer/gallery5.jpg";
import gallery6 from "../Assets/footer/gallery6.jpg";
import { NavbarLogo } from "./Navbar";

const footerImages = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
];

function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="firstContent">
          <NavbarLogo />

          <p>
            Eco-Friendly Products with unique designs give an unconventional
            touch to every product.
          </p>
        </div>

        <div className="secondContent">
          <div className="footerTitle">
            <h5>Quick Links</h5>
          </div>
          <ul className="unorderList">
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Technical Information</a>
            </li>
            <li>
              <a href="/">Catalogue</a>
            </li>
            <li>
              <a href="/">FAQs</a>
            </li>
            <li>
              <a href="/">Contact us</a>
            </li>
            <li>
              <a href="/">Bricks Manufacturers</a>
            </li>
          </ul>
        </div>

        <div className="thirdContent">
          <div className="footerTitle">
            <h5>Head Office</h5>
          </div>
          <ul className="unorderList">
            <li>
              <IoIosPin />
              <strong> Ecovision</strong>
              <p>
                D-15 AND 16, UPSIIDC, SITE-B, SURAJPUR INDUSTRIAL AREA, GAUTTAM
                BUDDHA NAGAR, UTTAR PRADESH-203207.
              </p>
            </li>
            <li>
              <a href="tel: +919899309630">
                <FiPhone /> +91 989 9309 630
              </a>
            </li>
            {/* <li>
              <FiPhone /> +91 9979 758 850
            </li> */}
          </ul>
          <div className="footer__icons">
            <a href="https://www.facebook.com/pages/Eco-Vision-Industries/1660546327574837">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com/ecovisionindustries?utm_medium=copy_link">
              <FaInstagram />
            </a>
            {/* <a href="/">
              <FaPinterestP />
            </a> */}
            <a href="/http://linkedin.com/in/ecovision-industries-9527293a">
              <AiFillLinkedin />
            </a>
          </div>
        </div>

        <div className="forthContent">
          <div className="footerGallery">
            {footerImages.map((values, index) => (
              <div className="img" key={index}>
                <img src={values} alt={values} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="whataspp">
      <a href="https://api.whatsapp.com/send?phone=+919899309630&amp;text=Hi, I am looking to book my health checkup. Please assist me with the diagnostic test details.">
        <div className="floatIcon">
          <FaWhatsapp />
        
        </div>
        </a>
      </div>
      <div className="copyright">
        <span>Copyright © 2021 Ecovision Ltd. All rights reserved.</span>
      </div>
    </div>
  );
}

export default Footer;
