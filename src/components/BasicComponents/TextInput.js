import React from 'react';
import styled from 'styled-components/native';
import {observer} from 'mobx-react';
const TextInput = styled.TextInput`
  ${props => props.extendedStyle}
`;

export default observer(TextInput);
