import React from "react";

const HOC = (OgComp, num) => {
  class NewComp extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    increaseCount = () => {
      this.setState((prev) => {
        return { count: prev.count + num };           //you can replace 'num' {passed in param above} with any desired number as well
      });
    };

    render() {
      return (
        <OgComp 
        count={this.state.count} increaseCount={this.increaseCount} 
        {...this.props}                 //Try commenting this line to check if original component could render it's own props received from App.js
        />
      );
    }
  }
  return NewComp;
};

export default HOC;
