import React from 'react';
import FlagIconFactory from 'react-flag-icon-css';
import styled from 'styled-components';

const Icon = FlagIconFactory(React, { useCssModules: false });

const DivIcon = styled.div`
  width: 80%;
  height: 80%;
  box-shadow: 3px 3px 10px rgba(0,0,0,0.14);
`;

const FlagIcon = props => {
  return (
    <DivIcon className="rounded">
      <Icon {...props} />
    </DivIcon>
  );
}

export default FlagIcon;
