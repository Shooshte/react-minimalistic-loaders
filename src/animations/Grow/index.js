import { keyframes } from "styled-components";

export const Grow = keyframes`
  0% {
    transform: rotate(0deg) scale(0, 0);
  }
  30% {
    transform: rotate(90deg) scale(2, 2);
  }
  70% {
    transform: rotate(180deg) scale(1.25, 1.25);
  }
  100% {
    transform: rotate(360deg) scale(0, 0);
  }
`;
