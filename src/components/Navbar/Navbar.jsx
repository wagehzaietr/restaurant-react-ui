import React, { useEffect, useState } from "react";
import { Nav, NavContainer } from "../Navbar/Navbar.style";
import Logo from "../../images/cheese-burger.png";

const Navbar = () => {
  return (
    <>
      <Nav >
        <NavContainer>
          <img src={Logo} alt="" />
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#food">menu</a>
            </li>
          </ul>
          <button className="btn">Order </button>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
