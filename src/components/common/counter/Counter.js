import React from 'react';
import { StyledCounter } from './styled';

export const Counter = (props) => {
    return <StyledCounter>{`${props.items} ${props.string}`}</StyledCounter>
}