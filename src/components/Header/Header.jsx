import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="header">
    <div className="header__container container">
      <img className="logo_header" src="images\logo_header.png" alt="logo firmy" />
      <Link to="/" className="name_header">
        Bramy i ogrodzenia
      </Link>
      <div style={{flexGrow: 1}}></div>
      <nav>
        <ul className="header__nav">
          <li className="nav__element">
            <Link to="/" className="nav__link">
              Strona Głowna
            </Link>
          </li>
          <li className="nav__element">
            <Link to="/gallery" className="nav__link">
              Galeria
            </Link>
          </li>
          <li className="nav__element">
            <Link to="/services" className="nav__link">
              Usługi
            </Link>
          </li>
          <li className="nav__element">
            <Link to="/contact" className="nav__link">
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
