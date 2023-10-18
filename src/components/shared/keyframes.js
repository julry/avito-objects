import { keyframes } from 'styled-components';

export const scaleAppear = keyframes`
  0% {
    transform: scale(0) translateX(-50%);
  }

  100% {
    transform: scale(1) translateX(-50%);
  }
`;

export const scaleDisappear = keyframes`
  0% {
    transform: scale(1) translateX(-50%);
  }

  100% {
    transform: scale(0) translateX(-50%);
  }
`;


export const scaleStaticAppear = keyframes`
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
`;

export const message = keyframes`
  0% {
    max-height: 100vmax;
  }
  80% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
    max-height: 100vmax;
    overflow: visible;
  }
`
