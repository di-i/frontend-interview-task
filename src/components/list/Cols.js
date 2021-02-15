import { colors } from '../../constants/colors';
import {
  StyledChevronUp,
  StyledChevronDown,
  StyledTh,
  StyledTr,
} from './styled';
import PropTypes from 'prop-types';

export const Cols = (props) => {
  const { colNames, requestSort, sortConfig } = props;
  return (
    <StyledTr>
      {colNames.map((item) => {
        return (
          <StyledTh key={item} onClick={() => requestSort(item.toLowerCase())}>
            {item}
            {sortConfig &&
            sortConfig.direction === 'ascending' &&
            sortConfig.key === item.toLowerCase() ? (
              <StyledChevronUp color={colors.lightGray} />
            ) : (
              <StyledChevronDown color={colors.lightGray} />
            )}
          </StyledTh>
        );
      })}
    </StyledTr>
  );
};

Col.propTypes = {
  requestSort: PropTypes.func.isRequired,
  sortConfig: PropTypes.object,
  colNames: PropTypes.array.isRequired,
};
