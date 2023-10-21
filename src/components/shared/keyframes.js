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
`;

export const shake = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%, 80% {
    transform: translate3d(1px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-2px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(2px, 0, 0);
  }
`;
