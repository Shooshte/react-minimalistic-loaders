import { extend } from "styled-components";
import { Square } from "../Square/";

export const Eyeball = Square.extend`
  border-radius: 50%;
  :before {
    content: "";
    display: block;
    border: calc(${props => props.size} * 0.1) solid ${props => props.color};
    width: calc(${props => props.size} * 0.2);
    height: calc(${props => props.size} * 0.2);
    border-radius: 50%;
    margin: calc(${props => props.size} * 0.15);
    background-color: ${props => props.color};
  }
  :after {
    content: "";
    display: block;
    width: calc(${props => props.size} * 0.1);
    height: calc(${props => props.size} * 0.1);
    border-radius: 50%;
    margin: calc(${props => props.size} * 0.15);
    transform: translate(calc(${props => props.size} * 0.13), calc(${props => props.size} * -0.44));
    background-color: #fff;
  }
`;
