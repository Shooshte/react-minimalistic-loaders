import React, { Component } from "react";
import { render } from "react-dom";
import s from "styled-components";
import debounce from 'lodash/debounce'

import Loader from "../../src";

import { animations } from "../../src/animations";
import { shapes } from "../../src/shapes";
class Demo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animation: "HalfRotation",
      shape: "Square",
      size: "28px",
      color: "#000",
      fontSize: "28px",
      loaderText: "Loading...",
      animationLength: "4s"
    };
  }

  updateState = debounce((key, value) => {
    this.setState({
      [key]: value
    });
  }, 500);

  handleChange = ({ target: { name, value } }) => {
    this.updateState(name, value)
  };

  render() {
    const {
      animation,
      shape,
      size,
      color,
      fontSize,
      loaderText,
      animationLength
    } = this.state;

    return (
      <div>
        <DemoStyles>
          <div className="controls-row">
            <div className="controls-container">
              <h3>Animations:</h3>
              {Object.keys(animations).map(key => {
                return (
                  <div
                    onClick={() => {
                      this.updateState("animation", key);
                    }}
                    key={key}
                    className={`controls-button ${animation === key &&
                      "selected"}`}
                  >
                    {key}
                  </div>
                );
              })}
            </div>
            <div className="controls-container">
              <h3>Shapes:</h3>
              {Object.keys(shapes).map(key => {
                return (
                  <div
                    onClick={() => {
                      this.updateState("shape", key);
                    }}
                    key={key}
                    className={`controls-button ${shape === key && "selected"}`}
                  >
                    {key}
                  </div>
                );
              })}
            </div>
            <div className="controls-container">
              <h3>Styles:</h3>
              <div className="input-container">
                <p className="input-label">Size:</p>
                <input
                  type="text"
                  className="text-input"
                  defaultValue={size}
                  name="size"
                  onChange={this.handleChange}
                />
              </div>
              <div className="input-container">
                <p className="input-label">Color:</p>
                <input
                  type="text"
                  className="text-input"
                  defaultValue={color}
                  name="color"
                  onChange={this.handleChange}
                />
              </div>
              <div className="input-container">
                <p className="input-label">Font Size:</p>
                <input
                  type="text"
                  className="text-input"
                  defaultValue={fontSize}
                  name="fontSize"
                  onChange={this.handleChange}
                />
              </div>
              <div className="input-container">
                <p className="input-label">Text:</p>
                <input
                  type="text"
                  className="text-input"
                  defaultValue={loaderText}
                  name="loaderText"
                  onChange={this.handleChange}
                />
              </div>
              <div className="input-container">
                <p className="input-label">Animation Length:</p>
                <input
                  type="text"
                  className="text-input"
                  defaultValue={animationLength}
                  name="animationLength"
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
        </DemoStyles>
        <Loader
          animation={animation} shape={shape} size={size} color={color} fontSize={fontSize} loaderText={loaderText} animationLength={animationLength}
        />
      </div>
    );
  }
}

const DemoStyles = s.div`
  display:flex;
  align-items: center;
  justify-items: center;
  width: 100%;
  flex-direction: column;
  .controls-row {
    display: flex;
    border-top: 1px solid rgba(0, 0, 0, .25);
  }
  .controls-container {
    padding: 1em;
    .controls-button {
      padding: .5em;
      background-color: #ecf0f1;
      border-radius: 10px;
      margin: .5em 0;
    }
    .controls-button:hover {
      background-color: #95a5a6;
    }
    .selected {
      background-color: #bdc3c7;
    }
  }
  .input-label {
    margin: .5em 0 0 0;
  }
`;

render(<Demo />, document.querySelector("#demo"));
