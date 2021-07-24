import { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar d-flex align-items-center">
        <ul className="nav-menu">
          <li className="nav-menu-item">
            <NavLink to="/" activeClassName="active">Home</NavLink>
          </li>
          <li className="nav-menu-item">
            <NavLink to="/products" activeClassName="active">Products</NavLink>
          </li>
          <li className="nav-menu-item">
            <NavLink to="/account" activeClassName="active">Account</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
