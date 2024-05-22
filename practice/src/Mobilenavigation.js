import { useState } from "react";
import Navlinks from "./Navlinks";
import { LuMenuSquare } from "react-icons/lu";
import { VscChromeClose } from "react-icons/vsc";

const Mobilenavigation = () => {
  const [open, setOpen] = useState(false);

  const openIcon = (
    <LuMenuSquare
      className="icon"
      size="100px"
      color="black"
      onClick={() => setOpen(!open)}
    />
  );

  const closeIcon = (
    <VscChromeClose
      className="closeicon"
      size="100px"
      color="red"
      onClick={() => setOpen(!open)}
    />
  );

const closemenu = () => setOpen(false);

  return <nav className="mobilenavigation">
    {open ? closeIcon : openIcon}
    {open && <Navlinks ismobile={true} closemenu={closemenu}/>}
    </nav>;
};

export default Mobilenavigation;
