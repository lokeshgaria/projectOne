import React from "react";
import "../css/Testimonials.css";
 
import Testimonial3 from "../Assets/testimonial/testimonial3.jpg";

function Frenchise() {
  return (
    <div className="franchise">
      <div className="frenchise__content">
          <div className="constentFRN">
          <h1>FRANCHISE</h1>

<p>
  If you have the zeal for unique architecture, commitment for building
  a successful business and the ability to accept new challenges, we
  offer you the right opportunity. FlexStone offers its franchise to all
  those enthusiastic architecture lovers.
</p>

<p>
  For opening FlexStone Gallery & becoming our Exclusive Partner for
  your City Contact us at labhashree.flexstone@gmail.com <br />
  or call us on +91 9979 758 333, +91 99797 58850
</p>
          </div>
      
      </div>
      <div className="franchiseimg">
      <img src={Testimonial3} alt="" className="img-fluid" />
      </div>
     
    </div>
  );
}

export default Frenchise;
