import React from "react";
import Skill from "../models/Skill";

interface BadgesProps {
  skills: Skill[]
}

class Badges extends React.Component<BadgesProps, any> {
  render() {
    const skills = this.props.skills.map((skill, index) =>
      <li className="mr-4" key={index}>
        <span className="d-flex flex-column align-items-center">
          <img className="mb-2" src={skill.icon} width="32" height="32" alt={skill.label}/>
          <p>{skill.label}</p>
        </span>
      </li>
    );
    return (
      <div className="badges-pnl">
        <ul className="d-flex list-unstyled p-0 mt-4">
          {skills}
        </ul>
      </div>
    );
  }
}

export default Badges;
