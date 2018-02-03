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
      <LoaderStyles fontSize={fontSize} color={color}>
        <ShapeDiv
          animation={animations[animation]}
          size={size}
          color={color}
          length={length}
        />
        {loaderText !== "" && <span className="loader-text">{loaderText}</span>}
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
  shape: "Base"
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
  font-size: ${props => props.fontSize};
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  padding: ${props => props.fontSize};
  .loader-text {
    color: ${props => props.color};
  }
`;

export default Loader;
