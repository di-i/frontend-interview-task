import styled from 'styled-components';
import { colors } from '../../../constants/colors';

export const SpinnerWrapper = styled.div`
margin-top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyledSpinner = styled.svg`
  margin: 0 !important;

  width: 100px;
  height: 100px;

  transition: all 2s ease-in-out;

  animation: rotate 2s linear infinite;

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }

  & .path {
    stroke: ${colors.lightGrey};
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }
`;
