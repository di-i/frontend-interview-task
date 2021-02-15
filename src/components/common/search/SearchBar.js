import React, { useState } from 'react';
import { Counter } from '../counter/Counter';
import { StyledInput, SearchWrapper } from './styled';
import PropTypes from 'prop-types';

export const SearchBar = (props) => {
  const [initialText, setInitialText] = useState('');

  const onChange = (e) => {
    setInitialText(e.target.value);
    props.search(initialText);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.search(initialText);
  };

  return (
    <SearchWrapper>
      <form onSubmit={onSubmit}>
        <StyledInput placeholder={props.placeholder} onChange={onChange} />
        <Counter itemsLength={props.itemsLength} counterText={props.counterText} />
      </form>
    </SearchWrapper>
  );
};

SearchBar.propTypes = {
  search: PropTypes.func.isRequired,
  itemsLength: PropTypes.number.isRequired,
  counterText: PropTypes.string.isRequired,
};
