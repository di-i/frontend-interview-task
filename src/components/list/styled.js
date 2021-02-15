import styled from 'styled-components';
import { colors } from '../../constants/colors';
import { ChevronDown } from '../common/chevrons/ChevronDown';
import { ChevronUp } from '../common/chevrons/ChevronUp';

export const StyledTable = styled.table`
  width: 100%;
  margin-top: 30px;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
`;

export const StyledThead = styled.thead`
  margin-bottom: 10px;
  th:nth-child(1) {
    width: 40%;
  }
  th:nth-child(4) {
    width: 23%;
  }
  th {
    width: 13%;
  }
  tr th {
    padding-left: 15px;
  }
  th svg {
    padding-top: 5px;
    padding-left: 5px;
  }
`;

export const StyledTr = styled.tr``;

export const StyledTbody = styled.tbody`
  tr {
    background-color: #ffffff;
    &:hover,
    &:active {
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
    }
  }
`;

export const StyledTd = styled.td`
  padding: 25px 0px 25px 15px;
  font-size: 13px;
  &:first-child {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    font-weight: 600;
    border-left: 4px solid ${(props) => props.color};
    color: ${colors.colorTableName};
  }
  &:nth-child(3) {
    font-weight: 400;
    color: ${(props) => props.color};
  }
  &:last-child {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    padding-right: 0;
  }
`;

export const StyledTh = styled.th`
  text-align: left;
  text-transform: uppercase;
  font-weight: inherit;
  color: ${colors.colorDarkGray};
`;

export const StyledChevronUp = styled(ChevronUp)``;

export const StyledChevronDown = styled(ChevronDown)``;

export const StyledButton = styled.button`
  display: inline-block;
  outline: none;
  border: none;
  width: 95px;
  padding: 8px 10px;
  border-radius: 10px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 15px;

  transition: all 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06);

  background-color: ${(props) =>
    props.type === 'primary' ? colors.primaryButton : colors.secondButton};
  color: ${colors.white};

  &:hover {
    background-color: ${(props) =>
      props.type === 'primary' ? colors.statusGreen : colors.colorTableName};
  }

  &:active {
    opacity: 0.5;
  }
  &:hover,
  &:active {
    outline: none;
    border: none;
  }
`;
