import React, { ReactNode } from "react";
import { NavLink } from "react-router-dom";

const Header:React.FC= () => {
  return (
    <div className="header">
      <div className="container">
        <div className="row justify-content-evenly align-items-center">
          <div className="col-4 fw-bolder text-white">
            <h2>LOGO</h2>
          </div>
          <div className="col-5 d-flex justify-content-evenly p-3 text-white">
            <NavLink to={"/"} className="nav-link">
              HOME
            </NavLink>
            <NavLink to={"/"} className="nav-link">
              MENU
            </NavLink>
            <NavLink to={"/"} className="nav-link">
              PAGES
            </NavLink>
            <NavLink to={"/"} className="nav-link">
              FEATURES
            </NavLink>
            <NavLink to={"/"} className="nav-link">
              SHOP
            </NavLink>
            <NavLink to={"/"} className="nav-link">
              BLOG
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
