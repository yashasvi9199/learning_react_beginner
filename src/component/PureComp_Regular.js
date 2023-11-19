import React, { Component } from "react";

export class PureComp_Regular extends Component {
  render() {
    console.log("Regular Component");
    return <div>Hello from Regular component, {this.props.prop}</div>;
  }
}

export default PureComp_Regular;
