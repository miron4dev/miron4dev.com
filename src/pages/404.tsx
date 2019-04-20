import React from "react";
import TreeView from "react-typist";

import "../assets/styles/main.scss";
import MainLayout from "../layouts";

class NotFoundPage extends React.Component {
  render() {
    return (
      <MainLayout>
        <div className="not-found-page">
          <h1 className="align-self-center">
            <TreeView>
              404 Not found
            </TreeView>
            <a href="/">Back</a>
          </h1>
        </div>
      </MainLayout>
    );
  }
}

export default NotFoundPage;
