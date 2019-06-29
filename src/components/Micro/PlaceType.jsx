import React from 'react';

import { Col } from 'reactstrap';

import styled from 'styled-components';

const PlaceCol = styled(Col)`
  text-align: center;
  margin-right: 10px;
  margin-bottom: 10px;
  display: ${p => p.hidden ? 'none' : 'block'};
`;

export const PlaceType = ({ icon, color, innerText, active }) => {
  // "fa-globe-americas", "blue", "All places"
  return (<PlaceCol className="card-date active">
    <i className={`fas ${icon} text-${color} fa-2x`}></i>
    <br/>
    <small>{ active ? <u>{innerText}</u> : innerText }</small>
  </PlaceCol>);
}
