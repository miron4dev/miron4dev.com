import React from "react";

import { Helmet } from "react-helmet";

import "../assets/styles/main.scss";

interface MainLayoutProps {
  title: string;
  metaDescription: string;
  contextPath: string;
}

class MainLayout extends React.Component<MainLayoutProps, any> {
  render() {
    return (
      <div>
        <Helmet
          title={this.props.title}
          meta={[
            {
              charSet: "utf-8"
            },
            {
              httpEquiv: "x-ua-compatible",
              content: "ie=edge"
            },
            {
              name: "viewport",
              content: "width=device-width, initial-scale=1, shrink-to-fit=no"
            },
            {
              name: "description",
              content: this.props.metaDescription
            },
            {
              name: "keywords",
              content: "Evgeny, Mironenko, Evgeny Mironenko, Software Engineer, " +
                "Software Developer, Java, Kotlin, Typescript, React"
            },
            {
              property: "og:type",
              content: "website"
            },
            {
              property: "og:title",
              content: "Evgeny Mironenko | Software Engineer"
            },
            {
              property: "og:description",
              content: "Personal website by Evgeny Mironenko Senior Software Engineer. " +
                "Java, Kotlin, Spring, React, TypeScript. Currently based in Tallinn, Estonia."
            },
            {
              property: "og:url",
              content: "https://miron4dev.com/"
            },
            {
              property: "og:url",
              content: "https://miron4dev.com/about"
            },
            {
              property: "og:url",
              content: "https://miron4dev.com/work"
            },
            {
              property: "og:image",
              content: "https://miron4dev.com/me.jpg"
            },
            {
              property: "twitter:card",
              content: "summary"
            },
            {
              property: "twitter:title",
              content: "Evgeny Mironenko | Software Engineer"
            },
            {
              property: "twitter:description",
              content: "Personal website by Evgeny Mironenko Senior Software Engineer. " +
                "Java, Kotlin, Spring, React, TypeScript. Currently based in Tallinn, Estonia."
            },
            {
              property: "twitter:url",
              content: "https://miron4dev.com/"
            },
            {
              property: "twitter:site",
              content: "@miron4dev"
            },
            {
              property: "twitter:image",
              content: "https://miron4dev.com/me.jpg"
            }
          ]}>
          <html lang="en"/>
        </Helmet>
        {this.props.children}
      </div>
    );
  }
}

export default MainLayout;
