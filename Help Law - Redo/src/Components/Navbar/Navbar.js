import "./Navbar.css";
import NavHome from "./NavHome";
import NavImage from "./NavImage";
import NavItem from "./NavItem";
const Navbar = () => {
  return (
    <div className="navbar-container">
        <NavHome/>
        <NavImage/>
        <NavItem content ='About'/>
        
    </div>
  );
};

export default Navbar;
