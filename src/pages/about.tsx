import React from "react";
import Navbar from "../components/Navbar";
import Typist from "../components/Typist";
import MainLayout from "../layouts";

import avatarImg from "../assets/img/avatar.jpg";

class AboutPage extends React.Component {
  render() {
    return (
      <MainLayout title="Evgeny Mironenko | About me"
                  metaDescription="About Senior Software Engineer Evgeny Mironenko -
                  Java, Kotlin, Spring, React, TypeScript developer with more than 6 years of experience."
                  contextPath="/about">
        <div className="d-flex flex-column main-layout">
          <Navbar/>
          <div className="container-fluid container">
            <main>
              <section className="py-3 py-md-4">
                <div className="d-flex align-items-end typist">
                  <h1><Typist messages={["About me"]}/></h1>
                </div>
                <img src={avatarImg} width={128} height={128} alt="Me" className="avatar"/>
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

              <div className="separator mb-3"/>

              <h2>Skills</h2>
              <ul className="skill-list">
                <li>
                  Java, Kotlin, Ruby, Python, REST, SOAP, XML, SQL
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
