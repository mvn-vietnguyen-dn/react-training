import { FC } from "react";
import { useSelector } from "react-redux";

import { Navbar } from "../../modules";
import logo from "../../../logo.svg";
import { RootState } from "../../../store";

const Header: FC = () => {
  const favourite = useSelector((state: RootState) => state.favourite.value);

  return (
    <header className="header">
      <img src={logo} className="logo" alt="logo" width="50" height="50" />
      <Navbar />
      <div className="icons-list">
        <i className="icons-item fas fa-heart">
          {!!favourite.length && <span>{favourite.length}</span>}
        </i>
        <i className="icons-item fas fa-search"></i>
        <i className="icons-item fas fa-sign-out-alt"></i>
      </div>
    </header>
  );
}

export default Header;
