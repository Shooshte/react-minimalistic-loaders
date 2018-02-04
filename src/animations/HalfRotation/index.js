import { keyframes } from "styled-components";

export const HalfRotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(-180deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;
