import React from "react";
import Badges from "../components/Badges";
import Skill from "../models/Skill";

import javaLogo from "../assets/img/skills/java.svg";
import kotlinLogo from "../assets/img/skills/kotlin.svg";
import reactLogo from "../assets/img/skills/react.svg";
import typescriptLogo from "../assets/img/skills/typescript.svg";
import ContactData from "../components/ContactData";
import Typist from "../components/Typist";

import Navbar from "../components/Navbar";
import MainLayout from "../layouts";

const skills = [
  new Skill("Java", javaLogo),
  new Skill("Kotlin", kotlinLogo),
  new Skill("TypeScript", typescriptLogo),
  new Skill("React", reactLogo)
];

class IndexPage extends React.Component {

  render() {
    return (
      <MainLayout title="Evgeny Mironenko | Software Engineer"
                  description="Personal website by Evgeny Mironenko Senior Software Engineer.
                  Java, Kotlin, Spring, React, TypeScript. Currently based in Tallinn, Estonia."
                  keywords="Evgeny, Mironenko, Evgeny Mironenko, Software Engineer,
                  Software Developer, Java, Kotlin, Typescript, React"
                  contextRoot={true}>
        <div className="d-flex flex-column main-layout">
          <Navbar/>
          <div className="container-fluid container">
            <main>
              <section className="mb-3">
                <div>
                  <h1><Typist messages={["Evgeny Mironenko"]}/></h1>
                  <p className="lead">Software Engineer & Proud Geek</p>
                  <p>Currently based in Tallinn, Estonia</p>
                </div>
              </section>
              <ContactData/>
              <div className="separator my-5"/>
              <h2>Tech I like to work with</h2>
              <Badges skills={skills}/>
            </main>
          </div>
        </div>
      </MainLayout>
    );
  }
}

export default IndexPage;
