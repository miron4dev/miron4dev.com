import React from "react";

import "../assets/styles/main.scss";

class MainLayout extends React.Component {
  render() {
    return (
      <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
        <header>
          <div className="container-fluid py-4 py-md-5">
            <div className="align-items-center">
              <h3 className="mb-0" style={{ color: "#008F11" }}>Evgeny Mironenko</h3>
            </div>
          </div>
        </header>
        <div className="container-fluid" style={{ flex: 1 }}>
          <main>
            {this.props.children}
          </main>
        </div>
      </div>
    );
  }
}

export default MainLayout;
