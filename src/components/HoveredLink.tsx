import React from "react";

class HoveredLink extends React.Component {

  render() {
    return (
      <div className="header">
        <h1>
          <a href="/" className="nav-link logo">
            E<span>vgeny </span>M<span>ironenko</span>
          </a>
        </h1>
      </div>
    );
  }
}

export default HoveredLink;
