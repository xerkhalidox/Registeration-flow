import React from 'react';
import styled from 'styled-components/native';

const Button = styled.TouchableOpacity`
  ${props => props.extendedStyle};
`;

export default Button;
