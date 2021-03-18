import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../../assets/x.svg";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import "./header.css";
import logo from "../../images/logo.png";

function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="header">
      <div className="headerCompanyContainer">
        <img src={logo} />
        <h2 className="headerTitle">Walters Knife Co.</h2>
      </div>
      <ul className={click ? "nav-options active" : "nav-options"}>
        <li className="option" onClick={closeMobileMenu}>
          <a href="/">HOME</a>
        </li>
        <li className="option" onClick={closeMobileMenu}>
          <a href="/info">INFO</a>
        </li>
        <li className="option" onClick={closeMobileMenu}>
          <a href="/knives">KNIVES</a>
        </li>
        <li className="option" onClick={closeMobileMenu}>
          <a href="/contact">CONTACT</a>
        </li>
      </ul>

      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
}

export default Header;
