import "./Navbar.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/vecteezy_demolition-destruction-demolishing_21553225.svg";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = (props) => {
  const [menu, setMenu] = useState("Home");
  const [respoMenu, setRespoMenu] = useState(false);

  const locate = useLocation();

  const toggleMenu = () => {
    setRespoMenu((prev) => !prev);
  };

  useEffect(() => {
    switch (locate.pathname) {
      case "/":
        setMenu("Home");
        break;
      case "/upvc":
        setMenu("UPVC");
        break;
      case "/epd":
        setMenu("Projects");
        break;
      case "/services":
        setMenu("Services");
        break;
      case `/product/${props.cat}`:
        setMenu("Services");
        break;
      default:
        setMenu("");
    }
  });
  return (
    <div className="nav">
      <nav>
        <div className="brand-txt">
          <h1 className="brand-title">
            {" "}
            <img src={logo} alt="" /> <span>Reval </span>World
          </h1>
          <i
            className={`fa-solid ${respoMenu ? "fa-xmark" : "fa-bars"}`}
            id="menuBar"
            onClick={toggleMenu}
          ></i>
        </div>

        <ul className={`{ ${respoMenu ? "show" : ""} }`}>
          <Link className="a" to={"/"}>
            <li className={menu === "Home" ? "clicked" : ""}>Home</li>
          </Link>
          <Link className="a" to="/upvc">
            <li className={menu === "UPVC" ? "clicked" : ""}>UPVC</li>
          </Link>
          <Link className="a" to="/services">
            <li className={menu === "Services" ? "clicked" : ""}>Services</li>
          </Link>
          <li className={menu === "Projects" ? "clicked" : ""}>Projects</li>
          <li className={menu === "Deals" ? "clicked" : ""}>Deals</li>
          <li className={menu === "Contact" ? "clicked" : ""}>Contact</li>
          <li className={menu === "About Us" ? "clicked" : ""}>About Us</li>
        </ul>

        <ul className={`dropdown2 ${respoMenu ? "show2" : ""}`}>
          <a
              href="https://wa.me/1234567890?text=Hello%20there!"
              target="_blank"
              rel="noopener noreferrer"
              className="a"
            ><li>
            
            <i className="fa-brands fa-whatsapp"></i>Whatsapp
          </li></a>
          <li>
            <i className="fa-solid fa-phone"></i>+966 123456789
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
