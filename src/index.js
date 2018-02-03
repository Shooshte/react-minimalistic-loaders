import React, { Component } from "react";
import s from "styled-components";
import PropTypes from "prop-types";

import { animations } from "./animations";
import { shapes } from "./shapes";

class Loader extends Component {
  render() {
    const {
      size,
      color,
      fontSize,
      loaderText,
      length,
      animation,
      shape
    } = this.props;

    const ShapeDiv = shapes[shape];

    return (
      <LoaderStyles style={{ fontSize: fontSize, padding: fontSize }}>
        <ShapeDiv
          animation={animations[animation]}
          size={size}
          color={color}
          length={length}
        />
        {loaderText !== "" && (
          <span
            className="loader-text"
            style={{
              color: color,
              marginTop: "2em"
            }}
          >
            {loaderText}
          </span>
        )}
      </LoaderStyles>
    );
  }
}

Loader.defaultProps = {
  size: "28px",
  color: "#000",
  fontSize: "28px",
  loaderText: "Loading...",
  length: "4s",
  animation: "NormalRotation",
  shape: "Square"
};

Loader.propTypes = {
  size: PropTypes.string, // Size in a valid CSS unit
  color: PropTypes.string, // A valid CSS color, changes both loader and text
  fontSize: PropTypes.string, // Size in a valid CSS unit
  loaderText: PropTypes.string, // Text displayed under the loader
  length: PropTypes.string, // The length of animation in a valid CSS unit
  animation: PropTypes.string // The name of the animation
};

const LoaderStyles = s.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
`;

export default Loader;
