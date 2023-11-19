import React, { PureComponent } from "react";

export class PureComp_Pure extends PureComponent {
  render() {
    console.log("Pure Component");
    return <div>Hello from Pure component, {this.props.prop}</div>;
  }
}

export default PureComp_Pure;
