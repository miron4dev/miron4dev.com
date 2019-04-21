import React from "react";
import HoveredLink from "./HoveredLink";

class Navbar extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark">
        <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <HoveredLink/>
            </li>
          </ul>
        </div>
        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/work">Work</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
