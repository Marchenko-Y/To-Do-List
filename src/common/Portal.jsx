import React from "react";
import ReactDOM from "react-dom";

class MyPortal extends React.Component {
  el = document.createElement("div");

  componentDidMount() {
    document.body.appendChild(this.el);
  }
  documentWillMount() {
    document.body.removeChild(this.el);
  }
  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

export default MyPortal;
