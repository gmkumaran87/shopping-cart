import React from "react";
import "./Navbar.css";
import { BsCart } from "react-icons/bs";
import { FaBars } from "react-icons/fa";

const Navbar = ({ count }) => {
  const handleClick = (e) => {
    console.log(e.target);
    const navBar = document.querySelector(".nav-bar-collapse");

    const classes = ["show-links"];
    navBar.classList.toggle(classes);

    //show-links
  };
  return (
    <nav className="nav-bar">
      <h2>Shopping Cart</h2>
      <FaBars className="toggle-bar" onClick={handleClick} />
      <div className="nav-bar-collapse">
        <ul className="links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Services</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
        </ul>
        <button type="button" className="btn cart-btn">
          <BsCart className="cart" />

          <span> Your Cart </span>
          <span data-id="nav" className="item-cnt">
            {count}
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
