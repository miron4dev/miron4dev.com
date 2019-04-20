import React from "react";

import { Helmet } from "react-helmet";

class MainLayout extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <html lang="en"/>
          <meta charSet="utf-8"/>
          <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
          <meta name="description" content="Evgeny Mironenko Personal Website"/>
          <meta name="keywords" content="Evgeny, Mironenko, Evgeny Mironenko, Software Engineer,
            Software Developer, Java, Kotlin, Typescript, React"/>

          <title>Evgeny Mironenko | Software Engineer</title>
        </Helmet>

        {this.props.children}
      </div>
    );
  }
}

export default MainLayout;
