import React from "react";

import facebookLogo from "../assets/img/social/facebook.svg";
import githubLogo from "../assets/img/social/github.svg";
import linkedinLogo from "../assets/img/social/linkedin.svg";
import telegramLogo from "../assets/img/social/telegram.svg";

class ContactData extends React.Component {
  render() {
    return (
      <div className="d-block">
        <div className="contact-data">
          <ul className="row p-0 list-unstyled">
            <li className="col" style={{ flex: 0 }}>
              <a target="_blank" href="https://github.com/miron4dev"
                 rel="noreferrer">
                <img src={githubLogo} alt="Github" height="16"/>
              </a>
            </li>
            <li className="col" style={{ flex: 0 }}>
              <a target="_blank" href="https://linkedin.com/in/miron4dev"
                 rel="noreferrer">
                <img src={linkedinLogo} alt="LinkedIn" height="16"/>
              </a>
            </li>
            <li className="col" style={{ flex: 0 }}>
              <a target="_blank" href="https://facebook.com/miron4dev"
                 rel="noreferrer">
                <img src={facebookLogo} alt="Facebook" height="16"/>
              </a>
            </li>
            <li className="col" style={{ flex: 0 }}>
              <a target="_blank" href="https://t.me/miron4dev"
                 rel="noreferrer">
                <img src={telegramLogo} alt="Telegram" height="16"/>
              </a>
            </li>
          </ul>
        </div>
        <p>
          <a href="mailto:miron4dev@gmail.com" className="mb-0">miron4dev@gmail.com</a>
        </p>
      </div>
    );
  }
}

export default ContactData;
