import React, { useState } from "react";
import logo from "../src/assets/logo.png";
import Bars from "../src/assets/bars.png";
import {Link} from "react-scroll";


const Header = () => {
  const mobile = window.innerWidth<=768 ? true : false;
 const [menu, setmenu] = useState(false);
    return ( 
        <div className="header" id="home">
            <img src={logo} alt=""  className="logo"/>
            {(menu === false && mobile === true)? (<div onClick={() => setmenu(true)} className="mm" style={{padding:"5px", borderRadius:"5px"}}><img style={{height:"30px", width:"30px"}} src={Bars} alt="" /></div>): 
             <ul className="header-menu">
             <li onClick={() => setmenu(false)}>
                <Link
                onClick={() => setmenu(false)}
                to="home"
                span={true}
                smooth={true}
                >Home</Link></li>
             <li onClick={() => setmenu(false)}>
             <Link
             onClick={() => setmenu(false)}
             to="programs"
             span={true}
             smooth={true}
             >Program</Link></li>
             <li onClick={() => setmenu(false)}>
             <Link
             onClick={() => setmenu(false)}
             to="reasons"
             span={true}
             smooth={true}
             >Why us</Link></li>
             <li onClick={() => setmenu(false)}>
             <Link
             onClick={() => setmenu(false)}
             to="plans"
             span={true}
             smooth={true}
             >Plans</Link></li>
             <li onClick={() => setmenu(false)}><Link
             onClick={() => setmenu(false)}
             to="testomonial"
             span={true}
             smooth={true}
             >Testomonial</Link></li>
         </ul>}

           
        </div>
     );
}
 
export default Header;