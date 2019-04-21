import React from "react";
import TreeView from "react-typist";

import MainLayout from "../layouts";

class NotFoundPage extends React.Component {
  render() {
    return (
      <MainLayout title="Page Not Found" metaDescription="Page Not Found"
                  contextPath="/404">
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
