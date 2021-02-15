import React from 'react';
import { GoBackLink } from '../common/goBackLink/GoBackLink';
import {
  Container,
  Text,
  Title,
  Wrapper,
} from './styled';

export const Results = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Results</Title>
        <Text>Order basket redesing</Text>
        <GoBackLink/>
      </Container>
    </Wrapper>
  );
};
