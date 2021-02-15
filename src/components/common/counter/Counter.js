import React from 'react';
import { StyledCounter } from './styled';

export const Counter = (props) => {
    return <StyledCounter>{`${props.itemsLength} ${props.counterText}`}</StyledCounter>
}