import "./NavHome.css";
import { AiOutlineHome } from "react-icons/ai";
const NavHome = () => {
  return (
    <div className="navhome">
      <a className="anchor-home" href="google.com">
        <AiOutlineHome/>
      </a>
    </div>
  );
};

export default NavHome;
