import styled from 'styled-components';
import { colors } from '../../../constants/colors';

import img from './search.svg'

export const SearchWrapper = styled.div`
    width: 100%;
    margin: 0;
    padding: 0;
    margin-top: 40px;
    position: relative;

`

export const StyledInput = styled.input`
  width: 100%;
  margin: 0;

  background: #ffffff;
  border: 1px solid #ebebeb;
  box-sizing: border-box;
  border-radius: 15px;

  outline: none;

  padding: 14px 14px 14px 35px;

  background-image: url(${img});
  background-position: 10px 14px;
  background-size: 13px;
  background-repeat: no-repeat;

  &::placeholder {
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 1.2px;
    color: ${colors.lightGrey};
  }
`;
