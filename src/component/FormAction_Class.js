import React, { Component } from "react";

class FormAction_Class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      hidden: this.props.hidden,
    };
  }

  changeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  submitForm = () => {
    alert(`Hello ${this.state.name}`);
  };

  resetName = () => {
    this.setState({
      name: "",
    });
  };

  render() {
    return (
      <div hidden={this.props.hidden}>
        <label>Enter Name : </label>
        <input type="text" value={this.state.name} />{" "}
        <p>This will not work. Try next one</p> <br />
        {/* The reason it does not work is because we are setting the value (which is blank) but there is not way to change the value user enters */}
        <input type="text" value={this.state.name} onChange={this.changeName} />
        <div>
          <button type="reset" onClick={this.resetName}>
            reset
          </button>
          <button type="submit" onClick={this.submitForm}>
            Submit
          </button>
        </div>
        
      </div>
    );
  }
}

export default FormAction_Class;
