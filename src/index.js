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
      animationLength,
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
          animationLength={animationLength}
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
  size: checkPropUnit,
  fontSize: checkPropUnit,
  loaderText: PropTypes.string,
  animationLength: checkPropAnimationLength,
  color: checkPropColor,
  animation: PropTypes.oneOf(Object.keys(animations)),
  shape: PropTypes.oneOf(Object.keys(shapes))
};

function checkPropAnimationLength(props, propName, componentName) {
  if (!isValidTimeUnit(props[propName])) {
    return new Error(
      `the prop ${propName} does not seem to a valid animation length (ms and s accepted).`
    )
  }
}

function isValidTimeUnit(stringToTest) {
  const regEx = RegExp('^([0-9]+)(ms|s)$')
  return regEx.test(stringToTest)
}

function checkPropUnit(props, propName, componentName) {
  if (!isValidUnit(props[propName])) {
    return new Error(
      `the prop ${propName} does not seem to be a valid CSS measurement unit.`
    )
  }
}

function isValidUnit(stringToTest) {
  const regEx = RegExp('^([+-]?([0-9]*[.])?[0-9]+)(em|ex|%|px|cm|mm|in|pt|pc|ch|rem|vh|vw|vmin|vmax)$')
  return regEx.test(stringToTest)
}

function checkPropColor(props, propName, componentName) {
  if (!isValidTextColor(props[propName])) {
    return new Error(
      `The prop ${propName} does not seem to be a valid CSS color.`
    )
  }
}

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
