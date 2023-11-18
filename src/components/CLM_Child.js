import React, { Component } from "react";

export class CLM_Child extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Peter",
    };
    console.log("Child Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Child getDerivedStateFromProps");
    return null; //this can either return a new state or null
  }

  componentDidMount() {
    console.log("Child componentDidMount");
  }

  //Component Lifecycle Methods : Updating Methods

  shouldComponentUpdate() {
    console.log("Child shouldComponentUpdate");
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Child getSnaptopBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("Child componentDidUpdate");
  }

  render() {
    console.log("Child render");
    return <div>Child Mounting Methods</div>;
  }
}

export default CLM_Child;
