import React, { useState } from "react";
import "./Navbar.css";
import Hamburger from "../Hamburger/Hamburger";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <a href="/">
            <i>fleur</i>
          </a>
        </div>
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/pages">Pages</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/shop">Shop</a>
          </li>
          <li>
            <a href="/elements">Elements</a>
          </li>
        </ul>
        <div className="search-cart">
          <button className="search-btn">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <button className="cart-btn">
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
          <button className="cart-btn" onClick={toggleMenu}>
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </nav>
      {isMenuOpen && <Hamburger onClose={toggleMenu} />}
    </>
  );
};

export default Navbar;
