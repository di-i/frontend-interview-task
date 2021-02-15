import React, { Fragment } from 'react';
import { useSortableData } from '../helpers/Sort';
import { Cols } from './Cols';
import { Rows } from './Rows';
import { StyledTable, StyledThead, StyledTbody } from './styled';
import PropTypes from 'prop-types';
import { NoResults } from '../common/noResults/NoResults';

export const List = (props) => {
  const { requestSort, sortConfig } = useSortableData(props.items);

  return (
    <Fragment>
      {props.items && props.items.length > 0 ? (
        <StyledTable>
          <StyledThead>
            <Cols
              requestSort={requestSort}
              colNames={props.colNames}
              sortConfig={sortConfig}
            />
          </StyledThead>
          <StyledTbody>
            <Rows items={props.items} />
          </StyledTbody>
        </StyledTable>
      ) : (
        <NoResults text='Your search did not match any results.' textButton='Reset'/>
      )}
    </Fragment>
  );
};

List.propTypes = {
  items: PropTypes.array.isRequired,
  colNames: PropTypes.array.isRequired,
};
