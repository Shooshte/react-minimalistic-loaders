import { extend } from "styled-components";
import { Base } from "../Base/";

export const NotchedCircle = Base.extend`
  border: 5px solid ${props => props.color};
  border-radius: 50%;
  border-right-color: transparent;
  background-color: transparent;
`;
