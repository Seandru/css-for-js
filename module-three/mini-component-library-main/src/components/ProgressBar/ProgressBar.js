/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  return (
  <div
    role='progressbar'
    aria-valuenow={value}
    aria-valuemin='0'
    aria-valuemax='100'
  >
    <VisuallyHidden>{value}%</VisuallyHidden>
    <Bar />
  </div>
  );
};

const Bar = styled.div`
  width: 50%;
  height: 8px;
  background-color: ${COLORS.primary};
  `

export default ProgressBar;
