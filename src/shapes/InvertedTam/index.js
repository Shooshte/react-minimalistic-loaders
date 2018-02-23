import { extend } from "styled-components";
import { Square } from "../Square/";

export const InvertedTam = Square.extend`
  margin-bottom: calc(${props => props.size});
  border-radius: 50%;
  ::before {
    content: "";
    display: block;
    position: absolute;
    border: calc(${props => props.size} * 0.1) solid ${props => props.color};
    width: ${props => props.size};
    height: ${props => props.size};
    background-color: transparent;
    margin: calc(${props => props.size} * -0.1);
    margin-top: calc(${props => props.size} + calc(${props => props.size} * -0.1));
    margin-left: calc(${props => props.size} * -0.5 + ${props => props.size} * -0.15);
    border-radius: 50%;
  }
  ::after {
    content: "";
    display: block;
    position: absolute;
    border: calc(${props => props.size} * 0.1) solid ${props => props.color};
    width: ${props => props.size};
    height: ${props => props.size};
    background-color: transparent;
    margin: calc(${props => props.size} * -0.1);
    margin-top: calc(${props => props.size} + calc(${props => props.size} * -0.1));
    margin-left: calc(${props => props.size} * 0.5 - ${props => props.size} * 0.05);
    border-radius: 50%;
  }
`;