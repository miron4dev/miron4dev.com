import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import "../assets/styles/main.scss";

const TemplateWrapper = ({ children }) => {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <Helmet
        htmlAttributes={{
          lang: "en"
        }}
        title="Evgeny Mironenko | Software Engineer"
        meta={[
          { name: "description", content: "Evgeny Mironenko | Software Engineer" },
          {
            name: "keywords",
            content: "java, kotlin, react, javascript, typescript, mironenko, evgeny, evgeny mironenko"
          }
        ]}>
        {/*<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>*/}
        {/*<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>*/}
        {/*<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>*/}
        {/*<link rel="manifest" href="/manifest.json"/>*/}
        {/*<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#212121"/>*/}
        <meta name="theme-color" content="#ffffff"/>
      </Helmet>
      <header>
        <div className="container-fluid py-4 py-md-5">
          <div className="d-flex align-items-center">
            <Link to={`/en/`}><h3 className="mb-0" style={{ color: "#008F11" }}>Evgeny Mironenko</h3></Link>
          </div>
        </div>
      </header>
      <div className="container-fluid" style={{ flex: 1 }}>
        <main>
          {children()}
        </main>
      </div>
    </div>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
