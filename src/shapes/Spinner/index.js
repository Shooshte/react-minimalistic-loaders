import { extend } from "styled-components";
import { Square } from "../Square/";

export const Spinner = Square.extend`
  border-radius: 50%;
  border-right-color: transparent;
  ::after {
    content: "";
    display: block;
    border: calc(${props => props.size} * 0.1) solid ${props => props.color};
    width: calc(${props => props.size} * 0.66);
    height: calc(${props => props.size} * 0.66);
    background-color: transparent;
    border-bottom-color: transparent;
    margin: calc(-${props => props.size} * 0.1);
    transform: translate(20%, -28%);
    border-radius: 50%;
  }
  ::before {
    content: "";
    display: block;
    border: calc(${props => props.size} * 0.1) solid ${props => props.color};
    width: calc(${props => props.size} * 0.33);
    height: calc(${props => props.size} * 0.33);
    background-color: transparent;
    border-top-color: transparent;
    margin: calc(-${props => props.size} * 0.1);
    transform: translate(66.66%, 66.66%);
    border-radius: 50%;
  }
`;
