import React from "react";
import "../css/Footer.css";
import brand from "../Assets/Navbar/brandLogo.png";
import { IoIosPin } from "react-icons/io";
import { FiPhone } from "react-icons/fi";
import {
  FaAddressBook,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaWhatsapp,
} from "react-icons/fa";

//FOOTER IMAGES
import gallery1 from "../Assets/footer/gallry1.jpg";
import gallery2 from "../Assets/footer/gallery2.jpg";
import gallery3 from "../Assets/footer/gallery3.jpg";
import gallery4 from "../Assets/footer/gallery4.jpg";
import gallery5 from "../Assets/footer/gallery5.jpg";
import gallery6 from "../Assets/footer/gallery6.jpg";

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
          <div className="footer__brandImg">
            <img src={brand} alt="brandImg" />
          </div>
          <p>
            Handmade products with unconventional design processes to give a
            unique touch to each solution.
          </p>
        </div>

        <div className="secondContent">
          <div className="footerTitle">
            <h5>Quick Links</h5>
          </div>
          <ul className="unorderList">
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Technical Information</a>
            </li>
            <li>
              <a href="">Catalogue</a>
            </li>
            <li>
              <a href="">FAQs</a>
            </li>
            <li>
              <a href="">Contact us</a>
            </li>
            <li>
              <a href="">Bricks Manufacturers</a>
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
              <strong>FlexStone</strong>
              <p>Shapath 4, SG Highway, Ahmedabad, Gujarat India-380015</p>
            </li>
            <li>
              <FiPhone /> +91 9979 758 333
            </li>
            <li>
              <FiPhone /> +91 9979 758 850
            </li>
          </ul>
          <div className="footer__icons">
            <a href="">
              <FaFacebookF />
            </a>
            <a href="">
              <FaInstagram />
            </a>
            <a href="">
              <FaPinterestP />
            </a>
          </div>
        </div>

        <div className="forthContent">
          <div className="footerGallery">
            {footerImages.map((values, index) => (
              <div className="img" key={index}>
                <img src={values} alt="image-gallery" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="whataspp">
          <div className="floatIcon">
              <FaWhatsapp />
          </div>
      </div>
      <div className="copyright">

        <span>Copyright © 2021 FlexStone Ltd. All rights reserved.</span>
      </div>
    </div>
  );
}

export default Footer;
