import { render } from "@testing-library/react";
import React, { Component } from "react";

//three phase for a react component lifecycle
/*
1. Mounting
2. Updating
3. Unmouting
*/
// ---------------- Priority -----------------   phase

//                 constructor                    1,
//                 getDerivedStateFromProps       1,2
//                 shouldComponentUpdate          2
//                 render                         1,2
//                 componentDidMount              1
//                 getSnapshotBeforeUpdate        2
//                 componentDidUpdate             2

export class LifeCycleMethod extends Component {
  constructor(props) {
    super(props);
    this.aka = "asas";
    this.state = {
      name: "faka",
    };
    console.log("constructor");
  }
  norm = () => {
    this.setState({
      name: Math.random(),
    });
  };
  componentDidMount() {
    console.log("component did mount", this.aka);
  }
  componentDidUpdate() {
    console.log("component did update");
  }
  shouldComponentUpdate(props, state) {
    console.log("should component update", props, state);
    return true;
  }

  //   this will have no access here
  static getDerivedStateFromProps(props, state) {
    console.log("get derived state from props", props, state);
    return null;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("get snapshot from ", prevProps, prevState);
    return false;
  }
  onClickStateChange = () => {
    this.setState((prev) => {
      console.log("checking prev state", prev);
      return { name: "state changed" };
    });
  };
  render() {
    console.log("render");
    return (
      <div>
        our current state is= {this.state.name}
        <button onClick={this.norm}>Change state</button>
      </div>
    );
  }
}
export default LifeCycleMethod;
