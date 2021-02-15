import styled from 'styled-components';
import { colors } from '../../constants/colors';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export const Container = styled.div`
  padding: 41px 52px 49px 48px;
`;

export const Title = styled.div`
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 32px;
  display: flex;
  align-items: center;
  color: ${colors.fontSecond};
`;

export const Text = styled.div`
  margin-top: 8px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;

  color: ${colors.fontSecond};
`;

