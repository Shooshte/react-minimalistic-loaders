import { extend } from "styled-components";
import { Base } from "../Base/";

export const Sunshine = Base.extend`
  ::before {
    content: "";
    position: absolute;
    height: ${props => props.size};
    width: ${props => props.size};
    background-color: transparent;
    border: calc(${props => props.size} * 0.1) solid ${props => props.color};
    transform: rotate(45deg);
    margin: calc(${props => props.size} * -0.1);
  }
  ::after {
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
    border-radius: 50%;
  }
`;
