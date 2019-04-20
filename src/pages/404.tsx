import React from "react";
import TreeView from "react-typist";

class NotFoundPage extends React.Component {
  render() {
    return (
      <div className="not-found-page">
        <h1 className="align-self-center">
          <TreeView>
            404 Not found
          </TreeView>
        </h1>
      </div>
    );
  }
}

export default NotFoundPage;
