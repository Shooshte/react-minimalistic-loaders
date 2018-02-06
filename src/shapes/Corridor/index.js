import { extend } from "styled-components";
import { Square } from "../Square/";

export const Corridor = Square.extend`
  border-top-color: transparent;
  border-bottom-color: transparent;
  ::before {
    content: "";
    position: absolute;
    height: calc(${props => props.size} * 0.5);
    width: calc(${props => props.size} * 0.5);
    border: calc(${props => props.size} * 0.1) solid ${props => props.color};
    margin: calc(${props => props.size} * -0.1);
    transform: translate(
      calc(${props => props.size} * 0.25),
      calc(${props => props.size} * 0.25)
    );
    border-left-color: transparent;
    border-right-color: transparent;
  }
  ::after {
    content: "";
    position: absolute;
    height: calc(${props => props.size} * 0.125);
    width: calc(${props => props.size} * 0.125);
    border: calc(${props => props.size} * 0.1) solid ${props => props.color};
    margin: calc(${props => props.size} * -0.1);
    transform: translate(
      calc(${props => props.size} * 0.4375),
      calc(${props => props.size} * 0.4375)
    );
    border-top-color: transparent;
    border-bottom-color: transparent;
  }
`;
