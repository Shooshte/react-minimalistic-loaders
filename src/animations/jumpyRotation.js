import { keyframes } from "styled-components";

export const jumpyRotation = keyframes`
  0% {
    transform: rotate(0deg) scale(0, 0);
  }
  30% {
    transform: rotate(90deg) scale(3, 3);
  }
  70% {
    transform: rotate(180deg) scale(1.5, 1.5);
  }
  100% {
    transform: rotate(360deg) scale(0, 0);
  }
`;
