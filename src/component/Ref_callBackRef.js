import React, { Component } from "react";

export class Ref_callBackRef extends Component {
  constructor(props) {
    super(props);
    this.cbRef = null;
    this.setCbRef = (element) => {
      this.cbRef = element;
    };
  }

  componentDidMount() {
    if (this.cbRef) {
      //checking if ref actually holds a value
      this.cbRef.focus();
    }
    console.log(this.cbRef);
  }

  alertMe() {
    if (this.cbRef) {
      alert(this.cbRef.value);
    }
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.setCbRef} />
        <button onClick={() => this.alertMe()}>Click</button>
      </div>
    );
  }
}

export default Ref_callBackRef;
