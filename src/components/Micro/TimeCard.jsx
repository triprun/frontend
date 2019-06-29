import React from 'react';
import { Card } from 'reactstrap';
import styled from 'styled-components';

const CardFront = styled(Card)`
  width: 100%;
  border-radius: $border-radius;
  padding-top: 8px;
  padding-bottom: 10px;
  padding-bottom: 0;
  transform: translate(-50%, 77%);
  left: 50%;
  transition: $transition-base;
  box-shadow: 0 0 10px rgba(0,0,0,0.05);
  margin-bottom: 10px;
  cursor: pointer;
  text-align: center;

  &:hover {
    transform: translate(-50%, 72%);
  }
`;

export const TimeCard = ({ day, date }) => {
  return (<CardFront>
    <small>{ date }</small>
    <h4>{ day }</h4>
  </CardFront>);
};
