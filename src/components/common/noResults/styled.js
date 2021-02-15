import styled from 'styled-components';
import { colors } from '../../../constants/colors';


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
`;

export const StyledText = styled.div`
  margin-bottom: 30px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: ${colors.fontSecond};
`;
