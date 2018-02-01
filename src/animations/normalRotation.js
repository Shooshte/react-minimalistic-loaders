import { keyframes } from "styled-components";

export const normalRotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  30% {
    transform: rotate(90deg);
  }
  70% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
