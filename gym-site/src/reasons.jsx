import React from "react";
import image1 from "./assets/image1.png";
import image2 from "./assets/image2.png";
import image3 from "./assets/image3.png";
import image4 from "./assets/image4.png";
import nb from "./assets/nb.png";
import adidas from "./assets/adidas.png";
import nike from "./assets/nike.png";
import tick from "./assets/tick.png";
import { Simulate } from "react-dom/test-utils";

const Reasons = () => {
  return (
    <div className="reasons">
      <div className="l-r">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className="r-r" id="reasons">
        <span>Some reasons</span>
        <div>
          <span className="stroke-txt">Why </span>
          <span>Choose us?</span>
        </div>
        <div className="d-r">
          <div>
            <img src={tick} alt=""></img>
            <span>OVER 140+ EXPERT COACHS</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>TRAIN SMARTER THAN EVER</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>1 FREE PROGARM FOR NEW MEMBER</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>
        <div className="none">
            <span style={{ color: "gray", fontWeight: "normal", fontSize:20}}>
            OUR PARTNERS
            </span>
            <div className="partners">
            <img src={nb} alt="" />
            <img src={nike} alt="" />
            <img src={adidas} alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
