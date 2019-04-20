import React from "react";

interface HoveredLinkProps {
  initialText: string,
  hoveredText: string
}

interface HoveredLinkState {
  isHovering: boolean;
}

class HoveredLink extends React.Component<HoveredLinkProps, HoveredLinkState> {
  state = {
    isHovering: false
  };

  handleMouseHover = () => {
    this.setState(this.toggleHoverState);
  };

  toggleHoverState = (state: HoveredLinkState) => {
    return {
      isHovering: !state.isHovering
    };
  };

  render() {
    const text = this.state.isHovering ? this.props.hoveredText : this.props.initialText;
    return (
      <h1>
      <a href="/" className="nav-link" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
        {text}
      </a>
      </h1>
    );
  }
}

export default HoveredLink;
