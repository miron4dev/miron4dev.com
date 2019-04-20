import React from "react";
import Navbar from "../components/Navbar";
import Typist from "../components/Typist";
import MainLayout from "../layouts";

class AboutPage extends React.Component {
  render() {
    return (

      <MainLayout>
        <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
          <Navbar/>
          <div className="container-fluid" style={{ flex: 1 }}>
            <main>
              <section className="py-3 py-md-4">
                <div className="d-flex align-items-end typist">
                  <h2><Typist messages={["About me"]}/></h2>
                </div>
              </section>
              <section className="mb-3">
                <div>
                  <p>
                    I have spent the last six years developing custom software solutions.
                  </p>
                  <p>
                    I believe that good software takes the commitment of customers, users and technology specialists.
                  </p>
                  <p>
                    I love what I'm doing because it allows build something that matters, build something that solves a
                    problem.
                  </p>
                  <p>
                    I enjoy being challenged with projects that require me to work outside my comfort and knowledge set.
                  </p>
                </div>
              </section>
              <div className="separator my-5"/>

              <h3>Skills</h3>
              <ul style={{listStyleType: "none"}}>
                <li>
                  Java, Kotlin, Ruby, REST, SOAP, XML, SQL
                </li>
                <li>
                  Servlets, Spring Core, Spring Boot, Spring Security, Spring Data, Spring AOP, JPA, Apache CXF, Ruby on
                  Rails
                </li>
                <li>
                  JavaScript, jQuery, TypeScript, React, Vue, HTML, JSF, PrimeFaces
                </li>
              </ul>
            </main>
          </div>
        </div>
      </MainLayout>
    );
  }
}

export default AboutPage;
