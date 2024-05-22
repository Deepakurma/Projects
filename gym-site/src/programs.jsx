import React from "react";
import {programsData} from "./data/programsData";
import RightArrow from "./assets/rightArrow.png";

const Programms = () => {
    return ( 
        <div className="prog" id="programs">
            <div className="prog-head">
                <span className="stroke-txt">Explore Our</span>
                <span>Programs</span>
                <span className="stroke-txt">To shape you</span>
            </div>
            <div className="prog-cat">
                {programsData.map((program) =>  (
                    <div className="cat">
                       {program.image}
                       <span>{program.heading}</span>
                       <span>{program.details}</span>
                       <div className="join-now"><span>Join now</span> <img src={RightArrow} alt="" /></div>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default Programms;