import React from 'react';
import styled, { keyframes } from 'styled-components';
import { PRIMARY } from '@/common/utils/constants';

/**
 * Spinner component
 */
export function Spinner(): React.ReactElement {
  return (
    <Wrapper width={'22px'} height={'22px'} viewBox={'0 0 44 44'}>
      <Circle fill={'none'} strokeWidth={4} strokeLinecap={'round'} cx={22} cy={22} r={20} />
    </Wrapper>
  );
}

const rotator = keyframes`
  0% {
    transform: scale(0.5) rotate(0deg);
  }
  100% {
    transform: scale(0.5) rotate(270deg);
  }
`;

const dash = keyframes`
  0% {
    stroke-dashoffset: 126;
  }
  50% {
    stroke-dashoffset: 126 / 2;
    transform: rotate(135deg);
  }
  100% {
    stroke-dashoffset: 126 / 2;
    transform: rotate(450deg);
  }
`;

const Wrapper = styled.svg`
  transition: opacity 0.15s ease;
  animation: ${rotator} 126 linear infinite;
  animation-play-state: running;
`;

const Circle = styled.circle`
  stroke: ${PRIMARY};
  stroke-dasharray: 126;
  stroke-dashoffset: 0;
  transform-origin: center;
  animation: ${dash} 1.4s ease-in-out infinite;
`;
