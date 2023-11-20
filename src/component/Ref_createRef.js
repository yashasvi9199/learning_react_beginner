import React, { Component } from "react";

export class Ref_createRef extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
    console.log(this.inputRef);
  }

  alertMe() {
    alert(this.inputRef.current.value);
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick={() => this.alertMe()}>Click</button>
      </div>
    );
  }
}

export default Ref_createRef;
