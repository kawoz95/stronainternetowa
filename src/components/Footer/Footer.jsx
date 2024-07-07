import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="page_footer">
    <div className="footer_container">
      <nav className="page_footer_nav">
        <ul className="page_footer_nav_list">
          <li>
            <Link to="/">Strona Głowna</Link>
          </li>
          <li>
            <Link to="/gallery">Galeria</Link>
          </li>
          <li>
            <Link to="/services">Usługi</Link>
          </li>
          <li>
            <Link to="/contact">Kontakt</Link>
          </li>
        </ul>
      </nav>
      <div style={{flexGrow: 1}}></div>
      <Link to="/" className="name_footer">
        Bramy i ogrodzenia
      </Link>
      <img className="logo_footer" src="images\logo_header.png" alt="logo firmy" />
    </div>
  </footer>
);

export default Footer;
