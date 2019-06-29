import React from 'react';

import styled from 'styled-components';

const Hover = styled.p`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  padding-top: 290px;
  padding-left: 5%;
  background: rgba(29, 106, 154, 0.72);
  color: #fff;
  visibility: hidden;
  opacity: 0;
  transition: opacity .2s, visibility .2s;
`;

const Div = styled.div`
  position: relative;
  margin-right: 8px;
  &:hover ${Hover} {
    visibility: visible;
    opacity: 1;
  }
`;

const Image = styled.img`
   width: 100%;
   height: 328px;
   max-height: 328px;
   object-fit: cover;
`;

export const StoryImage = ({ width, source }) => {
  const mobileWidth = Number.parseInt(width) + 5;
  return (<Div className={`col-${mobileWidth} col-md-${width} m-0 p-0 mr-3`}>
    <Image
      alt="..."
      className="rounded shadow"
      src={source}
    />
    <Hover className="rounded">This is hovered text</Hover>
  </Div>)
}
