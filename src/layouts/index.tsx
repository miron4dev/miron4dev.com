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
              property: "og:site_name",
              content: "Personal website by Evgeny Mironenko"
            },
            {
              property: "og:image",
              content: "https://miron4dev.com/me.jpg"
            },
            {
              name: "twitter:card",
              content: "summary"
            },
            {
              name: "twitter:title",
              content: "Evgeny Mironenko | Software Engineer"
            },
            {
              name: "twitter:description",
              content: "Personal website by Evgeny Mironenko Senior Software Engineer. " +
                "Java, Kotlin, Spring, React, TypeScript. Currently based in Tallinn, Estonia."
            },
            {
              name: "twitter:url",
              content: "https://miron4dev.com/"
            },
            {
              name: "twitter:site",
              content: "@miron4dev"
            },
            {
              name: "twitter:image",
              content: "https://miron4dev.com/me.jpg"
            }
          ]}>
          <html lang="en"/>

          <script type="application/ld+json">
            {JSON.stringify(
              {
                "@context": "http://schema.org",
                "@type": "Person",
                "name": "Evgeny Mironenko",
                "url": "https://miron4dev.com/",
                "jobTitle": "Senior Software Engineer",
                "alumniOf": "Herzen University",
                "gender": "male",
                "image": "https://miron4dev.com/me.jpg",
                "sameAs": [
                  "https://linkedin.com/in/miron4dev",
                  "https://github.com/miron4dev",
                  "https://www.facebook.com/miron4dev",
                  "https://t.me/miron4dev",
                  "https://twitter.com/miron4dev",
                ]
              }
            )}
          </script>
        </Helmet>
        {this.props.children}
      </div>
    );
  }
}

export default MainLayout;
