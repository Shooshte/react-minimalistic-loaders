import { keyframes } from "styled-components";

export const AcceleratedRotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  20% {
    transform: rotate(14deg);
  }
  40% {
    transform: rotate(58deg);
  }
  60% {
    transform: rotate(129deg);
  }
  80% {
    transform: rotate(230deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
