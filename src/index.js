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
  animation: "HalfRotation",
  shape: "Square"
};

Loader.propTypes = {
  size: PropTypes.string, // Size in a valid CSS unit
  fontSize: PropTypes.string, // Size in a valid CSS unit
  loaderText: PropTypes.string, // Text displayed under the loader
  length: PropTypes.string, // The length of animation in a valid CSS unit
  color: function (props, propName, componentName) {
    if (!isValidTextColor(props[propName])) {
      return new Error(
        `The prop ${propName} does not seem to be a valid CSS color.`
      )
    }
  }, // A valid CSS color, changes both loader and text
  animation: PropTypes.oneOf(Object.keys(animations)),
  shape: PropTypes.oneOf(Object.keys(shapes))
};

function isValidTextColor(stringToTest) {
  //Alter the following conditions according to your need.
  if (stringToTest === "") { return false; }
  if (stringToTest === "inherit") { return false; }
  if (stringToTest === "transparent") { return false; }
  var image = document.createElement("img");
  image.style.color = "rgb(0, 0, 0)";
  image.style.color = stringToTest;
  if (image.style.color !== "rgb(0, 0, 0)") { return true; }
  image.style.color = "rgb(255, 255, 255)";
  image.style.color = stringToTest;
  return image.style.color !== "rgb(255, 255, 255)";
}

const LoaderStyles = s.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
`;

export default Loader;
