import { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar d-flex align-items-center">
        <ul className="nav-menu">
          <li className="nav-menu-item">Menu 1</li>
          <li className="nav-menu-item">Menu 2</li>
          <li className="nav-menu-item">Menu 3</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
