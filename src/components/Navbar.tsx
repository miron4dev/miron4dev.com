import React from "react";
import HoveredLink from "./HoveredLink";

interface NavbarState {
  showNavBar: boolean
}

class Navbar extends React.Component<{}, NavbarState> {

  readonly state = {
    showNavBar: false
  };

  toggleNavBar = () => {
    this.setState({
      showNavBar: !this.state.showNavBar
    })
  };

  navBarClassName = () => {
    let className = "navbar-collapse collapse";
    if (this.state.showNavBar) {
      className += " show";
    }
    return className;
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <div className="navbar-header">
            <button className="navbar-toggler" type="button" onClick={this.toggleNavBar}>
              <span className="navbar-toggler-icon"/>
            </button>
          </div>
          <div id="navbar" className={this.navBarClassName()}>
            <ul className="nav navbar-nav mr-auto">
              <li className="nav-item">
                <HoveredLink/>
              </li>
            </ul>
            <ul className="nav navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/about/" title="About Evgeny">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/work/" title="Working experience">
                  Work
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/CV.pdf" title="Download CV" target="_blank">
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
