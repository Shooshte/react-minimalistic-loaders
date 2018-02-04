import { extend } from "styled-components";
import { Square } from "../Square/";

export const Eyeball = Square.extend`
  border-radius: 50%;
  :before {
    content: "";
    position: absolute;
    border: calc(${props => props.size} * 0.1) solid ${props => props.color};
    width: calc(${props => props.size} * 0.33);
    height: calc(${props => props.size} * 0.33);
    border-radius: 50%;
    margin: calc(${props => props.size} * -0.1);
    background-color: ${props => props.color};
    transform: translate(calc(${props => props.size} * 0.446), calc(${props => props.size} * 0.446));
  }
  :after {
    content: "";
    position: absolute;
    width: calc(${props => props.size} * 0.33 * 0.5);
    height: calc(${props => props.size} * 0.33 * 0.5);
    border-radius: 50%;
    margin: calc(${props => props.size} * -0.1);
    border: calc(${props => props.size} * 0.1) solid #fff;
    background-color: #fff;
    transform: translate(calc(${props => props.size} * 0.5567), calc(${props => props.size} * 0.5567));
  }
`;
