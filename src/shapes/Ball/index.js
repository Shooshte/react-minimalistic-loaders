import { extend } from "styled-components";
import { Square } from "../Square/";

export const Ball = Square.extend`
  border-radius: 50%;
  :before {
    content: "";
    display: block;
    border: calc(${props => props.size} * 0.1) solid ${props => props.color};
    width: calc(${props => props.size} * 0.25);
    height: calc(${props => props.size} * 0.25);
    background-color: transparent;
    border-radius: 50%;
    margin: calc(${props => props.size} * 0.15);
    background-color: ${props => props.color};
  }
`;
