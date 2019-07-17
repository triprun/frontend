import React from 'react';

import { NavLink } from 'react-router-dom';

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
  background: rgba(0, 0, 0, 0.25);
  color: #fff;
  transition: background .35s;
`;

const Div = styled.div`
  position: relative;
  margin-right: 8px;
  visibility: visible;
  opacity: 1;
  cursor: pointer;
  &:hover ${Hover} {
    background: rgba(0, 0, 0, 0.1);
  }
`;

const Image = styled.img`
   width: 100%;
   height: 328px;
   max-height: 328px;
   object-fit: cover;
`;

export const StoryImageVisible = ({ width, href, source, name }) => {
  const mobileWidth = Number.parseInt(width) + 5;
  return (<Div className={ `col-${ mobileWidth } col-md-${ width } m-0 p-0 mr-3` }>
    <Image
      alt="..."
      className="rounded shadow"
      src={ source }
    />
    <NavLink to={ href }>
      <Hover className="rounded">{ name }</Hover>
    </NavLink>
  </Div>)
}
