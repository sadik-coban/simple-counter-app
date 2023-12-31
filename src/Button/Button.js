import "./Button.css";
import React from "react";

class Button extends React.Component {
 render() {
    return (
      <>
        <button className = "btn" onClick = {this.props.onClick}>{this.props.name}</button>
      </>
    );
  }
}

export { Button };
