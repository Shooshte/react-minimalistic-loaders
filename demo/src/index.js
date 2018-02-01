import React, { Component } from "react";
import { render } from "react-dom";

import Loader from "../../src";

class Demo extends Component {
  render() {
    return (
      <div>
        <Loader />
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
