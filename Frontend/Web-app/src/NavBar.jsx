import { Link } from "react-router-dom";
import './App.css'
// import Logo from "./assets/pngwing.com.png";

const NavBar = () => {
  return (
    <div className="nav-container">
      <Link
        to="/"
        className="link"
      >
        {/* <img src={Logo} height={"40px"} width={"40px"} /> */}
        <p>Sateesh</p>
      </Link>
      <div
      className=".nav-items"
      >
        <Link
          to="/"
          className="link"
          activeClassName="active-link"
        >
          Contact Form
        </Link>
        <Link
          to="ContactDetails"
          className="link"
          activeClassName="active-link"
        >
          Contact Details
        </Link>
      </div>
    </div>
  );
};
export default NavBar;
