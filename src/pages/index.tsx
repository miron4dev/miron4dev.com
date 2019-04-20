import React from "react";
import Badges from "../components/Badges";
import Skill from "../models/Skill";

import javaLogo from "../assets/img/skills/java.svg";
import kotlinLogo from "../assets/img/skills/kotlin.svg";
import reactLogo from "../assets/img/skills/react.svg";
import typescriptLogo from "../assets/img/skills/typescript.svg";
import ContactData from "../components/ContactData";
import Typist from "../components/Typist";

import "../assets/styles/main.scss";
import MainLayout from "../layouts";

const messages = ["planning", "designing", "programming", "thinking", "optimizing", "refactoring",
  "simplifying", "debugging", "configuring", "searching", "tweaking", "Evgeny, nice to meet you!"];

const skills = [
  new Skill("Java", javaLogo),
  new Skill("Kotlin", kotlinLogo),
  new Skill("TypeScript", typescriptLogo),
  new Skill("React", reactLogo)
];

class IndexPage extends React.Component {

  render() {
    return (
      <MainLayout>
        <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
          <header>
            <div className="container-fluid py-4 py-md-5">
              <div className="align-items-center">
                <h3 className="mb-0" style={{ color: "#008F11" }}>Evgeny Mironenko</h3>
              </div>
            </div>
          </header>
          <div className="container-fluid" style={{ flex: 1 }}>
            <main>
              <section className="py-3 py-md-4">
                <div className="d-flex align-items-end typist">
                  <h1><Typist messages={messages}/></h1>
                </div>
              </section>
              <section className="mb-3">
                <div>
                  <p className="lead">Software Engineer & Proud Geek</p>
                  <p>Currently based in Tallinn, Estonia</p>
                </div>
              </section>
              <ContactData/>
              <div className="separator my-5"/>
              <h4>Tech I like to work with</h4>
              <Badges skills={skills}/>
            </main>
          </div>
        </div>
      </MainLayout>
    );
  }
}

export default IndexPage;
