import React from "react";

interface JobProps {
  company: string,
  date: string,
  position: string,
  passed?: boolean
}

class Job extends React.Component<JobProps, any> {

  getCompanyClass = () => {
    let className = "float-left";
    if (this.props.passed) {
      className += " text-muted";
    }
    return className;
  };

  getDateClass = () => {
    let className = "float-right";
    if (this.props.passed) {
      className += " text-muted";
    }
    return className;
  };

  getPositionClass = () => {
    let className = "card-title";
    if (this.props.passed) {
      className += " text-muted";
    }
    return className;
  };

  getBorderClass = () => {
    if (this.props.passed) {
      return "card border-secondary shadow";
    }
    return "card border-success shadow";
  };

  getBadgeClass = () => {
    if (this.props.passed) {
      return "badge badge-pill bg-secondary";
    }
    return "badge badge-pill bg-success border";
  };

  getSupportBadgeClass = () => {
    let className = "col";
    if (this.props.passed) {
      className += " border-right";
    }
    return className;
  };

  render() {
    return (
      <div className="row">
        <div className="col-auto text-center flex-column d-none d-sm-flex">
          <div className="row h-50">
            <div className={this.getSupportBadgeClass()}>&nbsp;</div>
            <div className="col">&nbsp;</div>
          </div>
          <h5 className="m-2">
            <span className={this.getBadgeClass()}>&nbsp;</span>
          </h5>
          <div className="row h-50">
            <div className="col border-right">&nbsp;</div>
            <div className="col">&nbsp;</div>
          </div>
        </div>
        <div className="col py-2">
          <div className={this.getBorderClass()}>
            <div className="card-body">
              <div className={this.getCompanyClass() + " company-name"}>{this.props.company}</div>
              <div className={this.getDateClass() + " company-name"}>{this.props.date}</div>
              <h2 className={this.getPositionClass()}>{this.props.position}</h2>

              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Job;
