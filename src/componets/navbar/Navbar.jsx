import "./Navbar.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/vecteezy_demolition-destruction-demolishing_21553225.svg";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  const [respoMenu, setRespoMenu] = useState(false)

  const locate = useLocation();

  const toggleMenu = ()=>{
    setRespoMenu((prev) => !prev);
  }

  useEffect(() => {
    switch (locate.pathname) {
      case "/reval-world-sample3/":
        setMenu("Home");
        break;
      case "/reval-world-sample3/UPVC":
        setMenu("UPVC");
        break;
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
        <i className={`fa-solid ${respoMenu ? "fa-xmark" : "fa-bars"}`} id="menuBar" onClick={toggleMenu}></i>
        </div>


        <ul className={`{ ${respoMenu ? "show" : ""} }`}>
          <Link className="a" to={"/reval-world-sample3/"}>
            <li className={menu === "Home" ? "clicked" : ""}>Home</li>
          </Link>
          <li className={menu === "UPVC" ? "clicked" : ""}>UPVC</li>
          <li className={menu === "Services" ? "clicked" : ""}>Services</li>
          <li className={menu === "Projects" ? "clicked" : ""}>Projects</li>
          <li className={menu === "Colors" ? "clicked" : ""}>Colors</li>
          <li className={menu === "Deals" ? "clicked" : ""}>Deals</li>
          <li className={menu === "Contact" ? "clicked" : ""}>Contact</li>
          <li className={menu === "About Us" ? "clicked" : ""}>About Us</li>
        </ul>

        <ul className={`dropdown2 ${respoMenu ? "show2" : ""}`}>
          <li>
            <i className="fa-brands fa-whatsapp"></i>Whatsapp
          </li>
          <li>
            <i className="fa-solid fa-phone"></i>+966 123456789
          </li>
        </ul>

      </nav>
    </div>
  );
};

export default Navbar;
