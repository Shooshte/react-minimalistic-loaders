import { extend } from "styled-components";
import { Square } from "../Square/";

export const ThreeCircles = Square.extend`
  border-radius: 50%;
  ::before {
    content: "";
    position: absolute;
    height: calc(${props => props.size});
    width: calc(${props => props.size});
    border: calc(${props => props.size} * 0.1) solid ${props => props.color};
    margin: calc(${props => props.size} * -0.1);
    border-radius: 50%;
    transform: translate(
      150%,
      0
    );
  }
  ::after {
    content: "";
    position: absolute;
    height: calc(${props => props.size});
    width: calc(${props => props.size});
    border: calc(${props => props.size} * 0.1) solid ${props => props.color};
    margin: calc(${props => props.size} * -0.1);
    border-radius: 50%;
    transform: translate(
      -150%,
      0
    );
  }
`;
