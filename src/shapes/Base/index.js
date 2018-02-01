import s from "styled-components";

export const Base = s.div`
  margin: ${props => props.size};
  height: ${props => props.size};
  width: ${props => props.size};
  background-color: ${props => props.color};
  animation: ${props => props.animation} ${props =>
  props.length} linear infinite;
`;
