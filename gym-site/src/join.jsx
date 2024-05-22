import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Join_now = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_7etntvr', 'template_ctljsji', form.current, '2tcb-qiHpZ7ztODat')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };


    return ( 
        <div className="join-n">
            <div className="l-j">
                <hr/>
                <div>
                    <span className="stroke-txt">READY TO</span>
                    <span> LEVEL UP</span>
                </div>
                <div>
                    <span>YOUR BODY</span>
                    <span className="stroke-txt"> WITH US?</span>
                </div>
            </div>
            <div className="r-j">
                <form id="myForm" ref={form} action="" className="email" onSubmit={sendEmail}>
                    <input type="email" name="user_email" placeholder="Enter mail-id" />
                    <button className="btn-jn">Join Now</button>
                </form>
            </div>
        </div>
     );
}
 
export default Join_now;