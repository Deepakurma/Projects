import react from 'react';
import {plansData} from "./data/plansData";
import whiteTick from "./assets/whiteTick.png";

const Plans = () => {
    return (  
        <div className="plans-container" id='plans'>
            <div className="blur p-b-1"></div>
            <div className="blur p-b-2"></div>
            <div className="prog-head" style={{gap: "30px"}}>
                <span className="stroke-txt">READY TO START</span>
                <span >YOUR JOURNEY</span>
                <span >NOW WITHUS</span>
            </div>
            {/* ---------------------------palns-cards-------------------------- */}
            <div className="plans">
               {plansData.map((plan, i) => (
                <div className="plan" key={i}>
                    {plan.icon}
                    <span>{plan.name}</span> 
                    <span> ${plan.price}</span>

                    <div className="features">
                        {plan.features.map((feature, i) => (
                            <div className="feature">
                                <img src={whiteTick} alt="" />
                                <span key={i}>{feature}</span>
                            </div>
                        ))}
                    </div>
                    <div>
                        <span>See more benefits -></span>
                    </div>
                    <button className='btn'>Join Now</button>
                </div>
               ))}
            </div>
        </div>
      );
}
 
export default Plans;