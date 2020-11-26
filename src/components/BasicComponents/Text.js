import React from 'react';
import styled from 'styled-components/native';

const Text = styled.Text`
  color: ${props => props.color};
  font-size: ${props => (props.fontSize ? props.fontSize + 'px' : '14px')};
  ${props => props.extendedStyle};
`;

export default Text;
