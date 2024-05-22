import React from "react";
import { testimonialsData } from "./data/testimonialsData";
import { useState } from "react";
import leftArrow from "./assets/leftArrow.png";
import rightArrow from "./assets/rightArrow.png";
import {motion} from "framer-motion";

const Testamonial = () => {
  const transition = {type: "spring", duration: 3};

  const [Select, setSelect] = useState(0);
  const tLength = testimonialsData.length;
  

//   function Toright(){
//     if (Select === 0){
//         setSelect(tLength +1);
//     }else{
//         setSelect((prev) => prev -1);
//     }
    
//   }

  return (
    <div className="test" id="testomonial">
      <div className="l-t">
        <span>TESTAMONIALS</span>
        <span className="stroke-txt">WHAT THEY</span>
        <span>SAY ABOUT US</span>
        <motion.span
        key={Select}
        initial={{opacity: 0, x: 100}} 
        animate={{opacity: 1, x: 0}}
        exit={{opacity:0, x: -100}}
        transition={transition}
        >{testimonialsData[Select].review}</motion.span>
        <span>
          <span style={{ color: "orange" }}>
            {testimonialsData[Select].status}
          </span>
          - {testimonialsData[Select].name}
        </span>
      </div>
      <div className="r-t">
        <motion.div
        initial={{opacity:0, x: -100}}
        whileInView={{opacity: 1, x: 0}}
        transition={{...transition, duration: 2}}
        ></motion.div>
        <motion.div
        initial={{opacity:0, x: -100}}
        whileInView={{opacity: 1, x: 0}}
        transition={{...transition, duration: 2}}
        ></motion.div>
        <motion.img
        key={Select}
        initial={{opacity: 0, x: 100}} 
        animate={{opacity: 1, x: 0}}
        exit={{opacity:0, x: -100}}
        transition={transition}
        src={testimonialsData[Select].image} alt="" />
        <div className="arrows">
          <img  onClick={() => {
            Select === 0? setSelect(tLength -1): setSelect((prev) => prev -1)
          }}  src={leftArrow} alt="" />
          <img onClick={() => {
            Select === tLength -1? setSelect(0): setSelect((prev) => prev +1)
          }} src={rightArrow} alt="" />
        </div>
      </div>
      {/* <div></div> */}
    </div>
  );
};

export default Testamonial;
