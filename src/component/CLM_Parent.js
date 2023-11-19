import React, { Component } from "react";
import CLM_Child from "./CLM_Child";

export class CLM_Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Peter',
    };
    console.log("Parent Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Parent getDerivedStateFromProps");
    return null; //this can either return a new state or null
  }

  componentDidMount() {
    console.log("Parent componentDidMount");
  }

  //Component Lifecycle Methods : Updating Methods

  shouldComponentUpdate() {
    console.log("Parent shouldComponentUpdate");
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Parent getSnaptopBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("Parent componentDidUpdate");
  }

  changeState() {
    this.setState({
      name: 'Spiderman'
    });
  }

  render() {
    console.log("Parent render");
    return (
      <div>
        <div>Parent Mounting Methods</div>
        <button onClick={()=> this.changeState()}>Change State</button>
        <CLM_Child />
      </div>
    );
  }
}

export default CLM_Parent;
