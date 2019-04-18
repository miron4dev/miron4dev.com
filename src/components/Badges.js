import React from "react";

class Badges extends React.Component {
  render() {
    const skills = this.props.skills.map((skill, index) =>
      <li className="mr-4" key={index}>
        <a href={skill.url} className="d-flex flex-column align-items-center">
          <img className="mb-2" src={skill.icon} width="32" height="32"/>
          <p>{skill.name}</p>
        </a>
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
