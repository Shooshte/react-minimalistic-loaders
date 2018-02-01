import { extend } from "styled-components";
import { BaseShape } from "./base";

export const NotchedCircle = BaseShape.extend`
  border: 5px solid ${props => props.color};
  border-radius: 50%;
  border-right-color: transparent;
  background-color: transparent;
`;
