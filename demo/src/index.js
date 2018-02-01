import React, { Component } from "react";
import { render } from "react-dom";

import Loader from "../../src";

import { animations } from "../../src/animations";
import { shapes } from "../../src/shapes";
class Demo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animation: "JumpyRotation",
      shape: "Base"
    };
  }

  updateState = (key, value) => {
    this.setState({
      [key]: value
    });
  };

  render() {
    const { animation, shape } = this.state;

    return (
      <div>
        {Object.keys(animations).map(key => {
          return (
            <div
              onClick={() => {
                this.updateState("animation", key);
              }}
            >
              {key}
            </div>
          );
        })}
        {Object.keys(shapes).map(key => {
          return (
            <div
              onClick={() => {
                this.updateState("shape", key);
              }}
            >
              {key}
            </div>
          );
        })}
        <Loader
          animation={animation}
          shape={shape}
          size="14px"
          color="#000"
          fontSize="28px"
          loaderText="Loading..."
          length="4s"
        />
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
