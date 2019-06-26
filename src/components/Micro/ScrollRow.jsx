import { Row } from 'reactstrap';

import styled from 'styled-components';

export const ScrollRow = styled(Row)`
  flex-wrap: nowrap;
  overflow-y: hidden;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none
  }
`;
