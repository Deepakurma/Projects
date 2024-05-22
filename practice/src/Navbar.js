import Mobilenavigation from "./Mobilenavigation";
import Navigation from "./Navigation";

const Navbar = () => {
  return (
    <div className="navbar">
      <Navigation />
      <Mobilenavigation />
    </div>
  );
};

export default Navbar;
