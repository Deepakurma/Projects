import React from "react";
// import "./hero.css" from "./hero.css";
import Header from "./Header";
import hero_image from "../src/assets/hero_image.png";
// import hero_icon from "../src/assets/hero_icon.png";
import hero_image_back from "../src/assets/hero_image_back.png";
import heart from "../src/assets/heart.png";
import calories from "../src/assets/calories.png";
import {motion} from "framer-motion";
import NumberCounter from "number-counter";

const Hero = () => {
  const transition = {type: "spring", duration: 3};
  const mobile = window.innerWidth<=768 ? true : false;
  // const transition = { duration: 1, ease: "easeOut" };
  return (
    <div className="hero">
      <div className="blur h-b"></div>
      <div className="l-hero">
        <Header />
        <div className="the-best">
          <motion.div
           initial={{left: mobile? "178px": "238px"}}
           whileInView={{left: "8px"}}
           transition={{...transition, type: "tween"}}
          ></motion.div>
          <span>the best fitness in the town</span>
        </div>
        {/* ------------------texts----------------------------- */}

        <div className="hero-txt">
          <div>
            <span className="stroke-txt">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div className="spn">
            In here we help you build the best of Your body and live your life
            with stunning looks.
          </div>
        </div>
        {/* ------------------figurees----------------------------- */}
        <div className="figures">
          <div className="figs">
            <span>
              <NumberCounter end={140} start={100} delay="4" preFix="+" />
            </span>
            <span>Expert coaches</span>
          </div>
          <div className="figs">
            <span><NumberCounter end={1000} start={900} delay="4" preFix="+" /></span>
            <span>Members joined</span>
          </div>
          <div className="figs">
            <span className=""><NumberCounter end={40} start={20} delay="4" preFix="+" /></span>
            <span>Fintness programms</span>
          </div>
        </div>
        {/* ------------------------------------buttons---------------------------------- */}
        <div className="btns">
            <button>Learn more</button>
            <button >Get started</button>
        </div>
        {/* --------------------------------------------------------------------- */}
      </div>
      <div className="r-hero">
        <button className="jn-btn">Join Now!</button>
        <motion.div 
        initial={{right: "-50px"}}
        whileInView={{right: "80px"}}
        // transition={{transition}}
        transition={{...transition, type: "tween"}}
        className="heartrate">
            <img src={heart} alt="" />
            <span>Heart rate</span><span><NumberCounter end={166} start={100} delay="4" postFix="bpm" /></span>
        </motion.div>

        {/* ---------------------------hero-imgs-------------------------- */}
        <img src={hero_image} alt="" className="h-img"/>
        <motion.img
        initial={{right: "100px"}}
        whileInView={{right: "300px"}}
        // transition={{transition}}
        transition={{...transition, type: "tween"}} 
        src={hero_image_back} alt="" className="h-img-back"/>
        {/* ------------------------------------calories------------------------------------ */}
        <motion.div 
        initial={{right: "800px"}}
        whileInView={{right: "600px"}}
        // transition={{transition}}
        transition={{...transition, type: "tween"}}
        className="cal">
            <img src={calories} alt="" />
            <div>
             <span>Calories burnt</span><span><NumberCounter end={600} start={500} delay="4" postFix="kcal" /></span>
            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
