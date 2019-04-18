import React from "react";
import Typist from "react-typist";
import Badges from "../components/Badges";

import "react-typist/dist/Typist.css";

import githubLogo from "../assets/img/social/github.svg";
import facebookLogo from "../assets/img/social/facebook.svg";
import linkedinLogo from "../assets/img/social/linkedin.svg";
import telegramLogo from "../assets/img/social/telegram.svg";

import javaLogo from "../assets/img/skills/java.svg";
import kotlinLogo from "../assets/img/skills/kotlin.svg";
import reactLogo from "../assets/img/skills/react.svg";
import typescriptLogo from "../assets/img/skills/typescript.svg";

const messages = ["planning", "designing", "programming", "thinking", "optimizing", "refactoring",
  "simplifying", "debugging", "configuring", "searching", "tweaking", "Evgeny, nice to meet you"];

const skills = [
  {
    icon: javaLogo,
    name: "Java"
  },
  {
    icon: kotlinLogo,
    name: "Kotlin"
  },
  {
    icon: typescriptLogo,
    name: "TypeScript"
  },
  {
    icon: reactLogo,
    name: "React"
  }
];

class IndexPage extends React.Component {

  renderTypist() {
    return (
      <Typist>
        {messages.map((msg, index, arr) => {
          return (
            <div className="d-inline" key={index}>
              <strong>{index < arr.length - 1 ? "$" : ""}{msg}</strong>
              {index !== arr.length - 1 && (
                <Typist.Backspace
                  count={
                    arr.length + 1
                  }
                  delay={768}
                />
              )}
            </div>
          );
        })}
      </Typist>
    );
  }


  renderContactData() {
    return (
      <div className="d-block">
        <div className="contact-data">
          <ul className="row p-0 list-unstyled">
            <li className="col" style={{ flex: 0 }}>
              <a target="_blank" href="https://github.com/miron4dev">
                <img src={githubLogo} alt="" height="16"/>
              </a>
            </li>
            <li className="col" style={{ flex: 0 }}>
              <a target="_blank" href="https://linkedin.com/in/miron4dev">
                <img src={linkedinLogo} alt="" height="16"/>
              </a>
            </li>
            <li className="col" style={{ flex: 0 }}>
              <a target="_blank" href="https://facebook.com/miron4dev">
                <img src={facebookLogo} alt="" height="16"/>
              </a>
            </li>
            <li className="col" style={{ flex: 0 }}>
              <a target="_blank" href="https://t.me/miron4dev">
                <img src={telegramLogo} alt="" height="16"/>
              </a>
            </li>
          </ul>
        </div>
        <p className="mb-0">miron4dev@gmail.com</p>
      </div>
    );
  }

  render() {
    return (
      <div>
        <section className="py-3 py-md-4">
          <div className="d-flex align-items-end typist">
            <h1>{this.renderTypist()}</h1>
          </div>
        </section>
        <section className="mb-3">
          <div>
            <p className="lead">Software Engineer & Proud Geek</p>
            <p>Currently based in Tallinn, Estonia</p>
          </div>
        </section>
        {this.renderContactData()}
        <div className="separator my-5"/>
        <h4>Tech I like to work with</h4>
        <Badges skills={skills}/>
      </div>
    );
  }
}

export default IndexPage;
