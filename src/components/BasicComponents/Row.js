import React from 'react';
import styled from 'styled-components/native';

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  ${props => props.extendedStyle};
`;

export default Row;
