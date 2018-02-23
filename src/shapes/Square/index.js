import s from "styled-components";

export const Square = s.div`
  height: ${props => props.size};
  width: ${props => props.size};
  background-color: transparent;
  border: calc(${props => props.size} * 0.1) solid ${props => props.color};
`;
