import { Component } from "react";

import { Navbar } from "../../modules";
import logo from "../../../logo.svg";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <img src={logo} className="logo" alt="logo" width="50" height="50" />
        <Navbar />
        <div className="icons-list">
          <i className="icons-item fas fa-search"></i>
          <i className="icons-item fas fa-sign-out-alt"></i>
        </div>
      </header>
    );
  }
}

export default Header;
