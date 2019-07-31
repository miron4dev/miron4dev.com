import React from "react";
import TreeView from "react-typist";

interface TypistProps {
  messages: string[]
}

class Typist extends React.Component<TypistProps, any> {

  mapMessage = (msg: string, index: number, arr: string[]) => {
    return (
      <div className="d-inline" key={index}>
        <strong>{index < arr.length - 1 ? "$" : ""}{msg}</strong>
        {this.renderBackspace(index, arr)}
      </div>
    );
  };

  renderBackspace = (index: number, arr: string[]) => {
    if (index === arr.length - 1) {
      return <div/>;
    }

    return (
      <TreeView.Backspace
        count={
          arr.length + 1
        }
        delay={768}
      />
    );
  };

  render() {
    return (
      <React.Fragment>
        <span style={{display: "none"}}>{this.props.messages.join(", ")}</span>
        <TreeView>
          {this.props.messages.map((msg, index, arr) => this.mapMessage(msg, index, arr))}
        </TreeView>
      </React.Fragment>
    );
  }
}

export default Typist;
