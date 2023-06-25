import React from "react";
import { NavLink } from "react-router-dom";
import 'bulma/css/bulma.min.css';
import UserProfile from "../login/AuthPopup";


const Navbar = () => {
  return (
    <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <NavLink className="navbar-item" to="/" activeClassName="is-active">
          <img src="logo.png" alt="Logo" className="logo" />
        </NavLink>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <NavLink className="navbar-item is-size-5 has-text-white" to="/" activeClassName="is-active">
            Home
          </NavLink>
          <NavLink className="navbar-item is-size-5 has-text-white" to="/about" activeClassName="is-active">
            About
          </NavLink>
          <NavLink className="navbar-item is-size-5 has-text-white" to="/contact" activeClassName="is-active">
            Contact
          </NavLink>
        </div>
      </div>
      <div className="navbar-end">
        <UserProfile />
      </div>
    </nav>
  );
};

export default Navbar;
