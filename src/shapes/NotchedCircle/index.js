import { extend } from "styled-components";
import { Square } from "../Square/";

export const NotchedCircle = Square.extend`
  border-radius: 50%;
  border-right-color: transparent;
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
    transform: rotate(65deg);
  }
`;
