import React from "react";

class HoveredLink extends React.Component {

  render() {
    return (
      <div className="header">
        <span>
          <a href="/" className="nav-link logo" title="Main page">
            M<span>ironenko </span>E<span>vgeny</span>
          </a>
        </span>
      </div>
    );
  }
}

export default HoveredLink;
