import React from 'react';

import PropTypes from 'prop-types';

import { IconButton, Tooltip } from '@mui/material';
import { Cancel as CancelIcon } from '@mui/icons-material';

import { ButtonsWrapper } from './styled';

const DiscardChangesButton = ({ onUndo }) => {
  return (
    <ButtonsWrapper>
      <Tooltip title="Discard changes" enterDelay={600}>
        <IconButton color="secondary" onClick={onUndo}>
          <CancelIcon color="primary" />
        </IconButton>
      </Tooltip>
    </ButtonsWrapper>
  );
};

DiscardChangesButton.propTypes = {
  onUndo: PropTypes.func,
};

export default DiscardChangesButton;
