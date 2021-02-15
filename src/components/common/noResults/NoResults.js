import React from 'react';
import { StyledText, Wrapper } from './styled';
import PropTypes from 'prop-types';
import { StyledButton } from '../../list/styled';

export const NoResults = (props) => {
  return (
    <Wrapper>
      <StyledText>{props.text}</StyledText>
      <StyledButton onClick={() => window.location.reload()} type='primary'>
        Reset
      </StyledButton>
    </Wrapper>
  );
};

NoResults.propTypes = {
  text: PropTypes.string.isRequired,
};
