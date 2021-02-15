import styled from 'styled-components';
import { colors } from '../../../constants/colors';

export const StyledLink = styled.button`
  outline: none;
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 42px;
  color: ${colors.fontSecond};
`;

export const StyledIcon = styled.img``;

export const StyledTextButton = styled.p`
  margin-left: 17px;
  font-family: Nunito;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
`;
