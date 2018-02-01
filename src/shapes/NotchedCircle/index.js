import { extend } from "styled-components";
import { Base } from "../Base/";

export const NotchedCircle = Base.extend`
  border: calc(${props => props.size} * 0.1) solid ${props => props.color};
  border-radius: 50%;
  border-right-color: transparent;
  background-color: transparent;
  :before {
    content: "";
    display: block;
    border: calc(${props => props.size} * 0.1) solid ${props => props.color};
    width: ${props => props.size};
    height: ${props => props.size};
    background-color: transparent;
    border-right-color: transparent;
    border-radius: 50%;
    margin: calc(-${props => props.size} * 0.1);
    transform: rotate(75deg);
  }
`;
