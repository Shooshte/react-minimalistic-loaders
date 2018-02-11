import { extend } from "styled-components";
import { Square } from "../Square/";

export const ThreeCircles = Square.extend`
  border: calc(${props => props.size} * 0.1 * 0.2) solid ${props => props.color};
  border-radius: 50%;
  height: calc(${props => props.size} * 0.2);
  width: calc(${props => props.size} * 0.2);
  ::before {
    content: "";
    position: absolute;
    height: calc(${props => props.size} * 0.2);
    width: calc(${props => props.size} * 0.2);
    border: calc(${props => props.size} * 0.1 * 0.2) solid ${props => props.color};
    margin: calc(${props => props.size} * -0.1 * 0.2);
    border-radius: 50%;
    transform: translate(
      150%,
      0
    );
  }
  ::after {
    content: "";
    position: absolute;
    height: calc(${props => props.size} * 0.2);
    width: calc(${props => props.size} * 0.2);
    border: calc(${props => props.size} * 0.1 * 0.2) solid ${props => props.color};
    margin: calc(${props => props.size} * -0.1 * 0.2);
    border-radius: 50%;
    transform: translate(
      -150%,
      0
    );
  }
`;
