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
            <li className="col contact">
              <a target="_blank" href="https://github.com/miron4dev"
                 rel="noopener noreferrer" title="Open Github profile">
                <img src={githubLogo} alt="Github" height="24"/>
              </a>
            </li>
            <li className="col contact">
              <a target="_blank" href="https://linkedin.com/in/miron4dev"
                 rel="noopener noreferrer" title="Open LinkedIn profile">
                <img src={linkedinLogo} alt="LinkedIn" height="24"/>
              </a>
            </li>
            <li className="col contact">
              <a target="_blank" href="https://facebook.com/miron4dev"
                 rel="noopener noreferrer" title="Open Facebook profile">
                <img src={facebookLogo} alt="Facebook" height="24"/>
              </a>
            </li>
            <li className="col contact">
              <a target="_blank" href="https://t.me/miron4dev"
                 rel="noopener noreferrer" title="Open Telegram profile">
                <img src={telegramLogo} alt="Telegram" height="24"/>
              </a>
            </li>
          </ul>
        </div>
        <p>
          <a href="mailto:miron4dev@gmail.com" title="Send an e-mail" className="mb-0">
            miron4dev@gmail.com
          </a>
        </p>
      </div>
    );
  }
}

export default ContactData;
